"use client";

import { DIMENSION_META } from "@/lib/dimensions";
import { DIMENSION_META_EN } from "@/lib/dimensions.en";
import type { HistoryEntry } from "@/lib/storage";
import type { Lang } from "@/lib/i18n/dict";
import type { DimensionId } from "@/lib/types";

// Standard distinct colors for the lines
const COLORS = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6"];

export function HistoryChart({
  entries,
  lang = "tr",
}: {
  entries: HistoryEntry[];
  lang?: Lang;
}) {
  if (entries.length < 2) return null; // Need at least 2 points to draw a line

  const dimMeta = lang === "en" ? DIMENSION_META_EN : DIMENSION_META;

  // Newest is index 0. We want chronological order (oldest first).
  const chrono = [...entries].reverse();

  // Find top 3 dimensions from the newest scan to plot
  const topIds = entries[0].ranked
    .slice(0, 3)
    .map((r) => r.id as DimensionId);

  // SVG dimensions
  const width = 600;
  const height = 200;
  const padding = { top: 20, right: 30, bottom: 30, left: 40 };

  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  // Helper scales
  const getX = (index: number) =>
    padding.left + (index / (chrono.length - 1)) * innerWidth;
  
  const getY = (ratio: number) =>
    padding.top + innerHeight - ratio * innerHeight;

  return (
    <div className="chart-container" style={{ marginBottom: "2rem", overflowX: "auto" }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height="100%"
        style={{ minWidth: 400, background: "var(--c-bg-subtle)", borderRadius: 8 }}
      >
        {/* Y Axis Grid Lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((val) => (
          <g key={val}>
            <line
              x1={padding.left}
              y1={getY(val)}
              x2={width - padding.right}
              y2={getY(val)}
              stroke="var(--c-border)"
              strokeDasharray="4 4"
            />
            <text
              x={padding.left - 5}
              y={getY(val) + 4}
              fontSize="10"
              fill="var(--c-text-muted)"
              textAnchor="end"
            >
              {val * 100}%
            </text>
          </g>
        ))}

        {/* X Axis Labels */}
        {chrono.map((entry, i) => {
          const date = new Date(entry.at);
          const label = new Intl.DateTimeFormat(lang === "en" ? "en-GB" : "tr-TR", {
            month: "short",
            day: "numeric",
          }).format(date);

          return (
            <text
              key={entry.at}
              x={getX(i)}
              y={height - 10}
              fontSize="10"
              fill="var(--c-text-muted)"
              textAnchor="middle"
            >
              {label}
            </text>
          );
        })}

        {/* Data Lines */}
        {topIds.map((id, lineIndex) => {
          const color = COLORS[lineIndex % COLORS.length];
          const points = chrono.map((entry, i) => {
            const row = entry.ranked.find((r) => r.id === id);
            const ratio = row ? row.ratio : 0;
            return `${getX(i)},${getY(ratio)}`;
          });

          return (
            <g key={id}>
              <polyline
                fill="none"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={points.join(" ")}
              />
              {/* Data points (circles) */}
              {chrono.map((entry, i) => {
                const row = entry.ranked.find((r) => r.id === id);
                const ratio = row ? row.ratio : 0;
                return (
                  <circle
                    key={`${id}-${entry.at}`}
                    cx={getX(i)}
                    cy={getY(ratio)}
                    r="4"
                    fill="var(--c-bg)"
                    stroke={color}
                    strokeWidth="2"
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
      
      {/* Legend */}
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        {topIds.map((id, lineIndex) => (
          <div key={id} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--c-text)" }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: COLORS[lineIndex % COLORS.length],
              }}
            />
            {dimMeta[id]?.short ?? id}
          </div>
        ))}
      </div>
    </div>
  );
}
