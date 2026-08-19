"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="tr">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          background: "#d7dde4",
          color: "#1c2430",
          padding: 48,
        }}
      >
        <h1>Bir şey bozuldu.</h1>
        <p>Sayfayı yenilemeyi deneyin.</p>
        <button type="button" onClick={reset}>
          Yeniden dene
        </button>
      </body>
    </html>
  );
}
