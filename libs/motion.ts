export const MOTION_STORAGE_KEY = "lasies-motion";
export const MOTION_EVENT = "lasies:motion";

/** Inline script for <head>: restores a saved "paused" choice before paint. */
export const motionInitScript = `try{if(localStorage.getItem('${MOTION_STORAGE_KEY}')==='paused')document.documentElement.dataset.motion='paused'}catch(e){}`;
