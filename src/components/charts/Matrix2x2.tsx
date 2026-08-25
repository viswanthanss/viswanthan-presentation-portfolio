import "./charts.css";

type Point = { label: string; x: number; y: number; highlight?: boolean };

export default function Matrix2x2({
  xLabel,
  yLabel,
  xLowHigh,
  yLowHigh,
  points,
}: {
  xLabel: string;
  yLabel: string;
  xLowHigh: [string, string];
  yLowHigh: [string, string];
  points: Point[];
}) {
  const size = 320;
  const pad = 8;

  return (
    <div style={{ display: "flex", gap: 24, flex: 1, alignItems: "center" }}>
      <div style={{ position: "relative", flex: "0 0 auto", width: "min(100%, 360px)" }}>
        <svg viewBox={`0 0 ${size} ${size}`} className="chart" style={{ height: "auto" }}>
          <line x1={size / 2} x2={size / 2} y1={pad} y2={size - pad} className="chart-axis" />
          <line x1={pad} x2={size - pad} y1={size / 2} y2={size / 2} className="chart-axis" />
          <rect x={pad} y={pad} width={size - pad * 2} height={size - pad * 2} fill="none" stroke="#24241f" />

          {points.map((p) => {
            const cx = pad + (p.x / 100) * (size - pad * 2);
            const cy = pad + (1 - p.y / 100) * (size - pad * 2);
            return (
              <g key={p.label}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={p.highlight ? 7 : 5}
                  fill={p.highlight ? "#c6ff4a" : "#6b6b66"}
                />
                <text
                  x={cx}
                  y={cy - 12}
                  textAnchor="middle"
                  className="chart-annotation"
                  style={{ fontSize: 9.5 }}
                >
                  {p.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "70%" }}>
        <div>
          <p className="chart-annotation-muted">{yLabel}</p>
          <p className="chart-annotation">{yLowHigh[1]} ↑</p>
        </div>
        <div>
          <p className="chart-annotation">{xLowHigh[0]} · {xLowHigh[1]} →</p>
          <p className="chart-annotation-muted">{xLabel}</p>
        </div>
      </div>
    </div>
  );
}
