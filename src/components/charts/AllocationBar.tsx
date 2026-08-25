import "./charts.css";

type Segment = { label: string; pct: number; highlight?: boolean };

export default function AllocationBar({ segments }: { segments: Segment[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: 18 }}>
      <div style={{ display: "flex", height: 34, borderRadius: 3, overflow: "hidden" }}>
        {segments.map((s) => (
          <div
            key={s.label}
            style={{
              width: `${s.pct}%`,
              background: s.highlight ? "#c6ff4a" : "#33332e",
              borderRight: "2px solid #111111",
            }}
          />
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {segments.map((s) => (
          <div key={s.label}>
            <p className="chart-annotation" style={{ color: s.highlight ? "#c6ff4a" : "#f2f1ec" }}>
              {s.pct}%
            </p>
            <p className="chart-annotation-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
