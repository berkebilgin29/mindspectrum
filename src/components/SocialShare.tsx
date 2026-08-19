"use client";

import { useCallback } from "react";

export function SocialShare({ text }: { text: string }) {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const wp = useCallback(() => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text + "\n" + url)}`,
      "_blank",
    );
  }, [text, url]);

  const tw = useCallback(() => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      "_blank",
    );
  }, [text, url]);

  const fb = useCallback(() => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
    );
  }, [url]);

  return (
    <div className="share-row no-print">
      <button className="share-btn" type="button" onClick={wp}>
        WhatsApp
      </button>
      <button className="share-btn" type="button" onClick={tw}>
        X / Twitter
      </button>
      <button className="share-btn" type="button" onClick={fb}>
        Facebook
      </button>
    </div>
  );
}
