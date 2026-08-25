import "./charts.css";

type Series = {
  label: string;
  color: string;
  values: number[];
};

type Props = {
  categories: string[];
  series: Series[];
  annotation?: string;
};

const W = 640;
const H = 280;
const PAD_L = 36;
const PAD_R = 16;
const PAD_T = 16;
const PAD_B = 28;

export default function LineChart({ categories, series, annotation }: Props) {
  const max = Math.max(...series.flatMap((s) => s.values)) * 1.1;
  const innerW = W - PAD_L - PAD_R;
  const innerH = H - PAD_T - PAD_B;

  const x = (i: number) => PAD_L + (i / (categories.length - 1)) * innerW;
  const y = (v: number) => PAD_T + innerH - (v / max) * innerH;

  const toPoints = (values: number[]) =>
    values.map((v, i) => `${x(i)},${y(v)}`).join(" ");

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <svg viewBox={`0 0 ${W} ${H}`} className="chart" preserveAspectRatio="none">
        {[0, 0.25, 0.5, 0.75, 1].map((t) => (
          <line
            key={t}
            x1={PAD_L}
            x2={W - PAD_R}
            y1={PAD_T + innerH * t}
            y2={PAD_T + innerH * t}
            className="chart-grid"
          />
        ))}
        <line x1={PAD_L} x2={PAD_L} y1={PAD_T} y2={PAD_T + innerH} className="chart-axis" />
        <line
          x1={PAD_L}
          x2={W - PAD_R}
          y1={PAD_T + innerH}
          y2={PAD_T + innerH}
          className="chart-axis"
        />

        {categories.map(
          (c, i) =>
            i % 2 === 0 && (
              <text
                key={c}
                x={x(i)}
                y={H - 8}
                textAnchor="middle"
                className="chart-annotation-muted"
              >
                {c}
              </text>
            )
        )}

        {series.map((s) => (
          <g key={s.label}>
            <polyline
              points={toPoints(s.values)}
              fill="none"
              stroke={s.color}
              strokeWidth={2.5}
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {s.values.map((v, i) => (
              <circle key={i} cx={x(i)} cy={y(v)} r={2.5} fill={s.color} />
            ))}
          </g>
        ))}
      </svg>

      <div style={{ display: "flex", gap: 20, marginTop: 8, flexWrap: "wrap" }}>
        {series.map((s) => (
          <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{ width: 10, height: 10, borderRadius: "50%", background: s.color }}
            />
            <span className="chart-annotation-muted">{s.label}</span>
          </div>
        ))}
      </div>

      {annotation && <p className="chart-annotation" style={{ marginTop: 6 }}>{annotation}</p>}
    </div>
  );
}
