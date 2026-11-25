"use client";
import type { PostHog } from "posthog-js";

let client: PostHog | null = null;

/**
 * Starts PostHog – called by the consent banner only after the visitor has
 * agreed (also for a choice stored on an earlier visit). Before that, not
 * even the library is downloaded: it is imported on demand here.
 */
export async function startPostHog() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;
  const { default: posthog } = await import("posthog-js");
  if (!posthog.__loaded) {
    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      person_profiles: "identified_only",
      persistence: "localStorage+cookie",
    });
  }
  client = posthog;
  posthog.opt_in_capturing();
}

/**
 * Consent withdrawn after PostHog had started: stop capturing. (No reset():
 * in posthog-js that would clear the opt-out again.)
 */
export function stopPostHog() {
  client?.opt_out_capturing();
}
