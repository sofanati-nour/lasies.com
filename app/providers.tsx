"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

/**
 * Starts PostHog – called by the consent banner only after the visitor has
 * agreed (also for a choice stored on an earlier visit). Before that,
 * nothing from PostHog is loaded.
 */
export function initPostHog() {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key || posthog.__loaded) return;
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: "identified_only",
    persistence: "localStorage+cookie",
  });
}

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
