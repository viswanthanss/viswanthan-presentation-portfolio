import "./charts.css";

type Bar = { label: string; value: number; display: string; highlight?: boolean };

export default function BarChart({
  bars,
  max,
  insight,
}: {
  bars: Bar[];
  max?: number;
  insight?: string;
}) {
  const maxValue = max ?? Math.max(...bars.map((b) => b.value));

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: 14 }}>
      {bars.map((b) => (
        <div key={b.label}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <span className="chart-annotation-muted">{b.label}</span>
            <span
              className="chart-annotation"
              style={{ color: b.highlight ? "#c6ff4a" : "#f2f1ec" }}
            >
              {b.display}
            </span>
          </div>
          <div style={{ height: 8, background: "#24241f", borderRadius: 2 }}>
            <div
              style={{
                height: "100%",
                width: `${(b.value / maxValue) * 100}%`,
                background: b.highlight ? "#c6ff4a" : "#6b6b66",
                borderRadius: 2,
                transition: "width 500ms var(--ease)",
              }}
            />
          </div>
        </div>
      ))}
      {insight && <p className="chart-annotation" style={{ marginTop: 10 }}>{insight}</p>}
    </div>
  );
}
