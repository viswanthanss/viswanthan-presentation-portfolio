import "./charts.css";

type Stage = { label: string; value: number; highlightDrop?: boolean };

export default function Funnel({ stages, note }: { stages: Stage[]; note?: string }) {
  const max = stages[0].value;

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: 0 }}>
      {stages.map((s, i) => {
        const widthPct = (s.value / max) * 100;
        const prev = stages[i - 1];
        const dropped = prev ? prev.value - s.value : 0;
        return (
          <div key={s.label} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
              <span className="chart-annotation-muted">{s.label}</span>
              <span className="chart-annotation">{s.value}%</span>
            </div>
            <div
              style={{
                height: 20,
                width: `${widthPct}%`,
                minWidth: "18%",
                background: s.highlightDrop ? "#c6ff4a" : "rgba(242,241,236,0.16)",
                borderRadius: 2,
                transition: "width 500ms var(--ease)",
              }}
            />
            {i > 0 && dropped >= 15 && (
              <p className="chart-annotation-muted" style={{ marginTop: 4 }}>
                ↓ {dropped} pts drop
              </p>
            )}
          </div>
        );
      })}
      {note && <p className="chart-annotation" style={{ marginTop: 6 }}>{note}</p>}
    </div>
  );
}
