import "./charts.css";

type Stage = { period: string; title: string; description: string };

export default function Timeline({ stages }: { stages: Stage[] }) {
  return (
    <div style={{ display: "flex", flex: 1, alignItems: "stretch" }}>
      {stages.map((s, i) => (
        <div
          key={s.period}
          style={{
            flex: 1,
            borderLeft: i === 0 ? "none" : "1px solid #24241f",
            padding: "0 clamp(8px, 1.5vw, 20px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <p className="chart-annotation-muted" style={{ marginBottom: 8 }}>
            {s.period}
          </p>
          <p className="chart-annotation" style={{ color: "#c6ff4a", marginBottom: 4 }}>
            {s.title}
          </p>
          <p className="chart-annotation-muted">{s.description}</p>
        </div>
      ))}
    </div>
  );
}
