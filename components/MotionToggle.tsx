"use client";
import { useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import { cn } from "@/libs/utils";

import { MOTION_EVENT as EVENT, MOTION_STORAGE_KEY as STORAGE_KEY } from "@/libs/motion";

const subscribe = (onChange: () => void) => {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
};
const isPaused = () => document.documentElement.dataset.motion === "paused";
const serverSnapshot = () => false;

/**
 * Pauses/resumes the hero slideshow and the occasion ticker (WCAG 2.2.2).
 * The choice is remembered; an inline script in the layout applies it
 * before the first paint.
 */
export default function MotionToggle({ className }: { className?: string }) {
  const paused = useSyncExternalStore(subscribe, isPaused, serverSnapshot);

  const toggle = () => {
    const next = !paused;
    if (next) document.documentElement.dataset.motion = "paused";
    else delete document.documentElement.dataset.motion;
    try {
      localStorage.setItem(STORAGE_KEY, next ? "paused" : "running");
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex items-center gap-2 rounded-full motion-reduce:hidden bg-olive-950/60 px-4 py-2 text-xs font-semibold text-cream backdrop-blur-sm transition hover:bg-olive-950/80",
        className
      )}
    >
      {paused ? <Play size={14} aria-hidden /> : <Pause size={14} aria-hidden />}
      {paused ? "Animationen fortsetzen" : "Animationen pausieren"}
    </button>
  );
}

