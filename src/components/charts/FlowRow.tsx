import "./charts.css";

type Column = { label: string; items: string[]; highlight?: boolean };

export default function FlowRow({ columns, loop }: { columns: Column[]; loop?: boolean }) {
  return (
    <div style={{ display: "flex", flex: 1, alignItems: "center", flexWrap: "wrap", gap: 4 }}>
      {columns.map((col, i) => (
        <div key={col.label} style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 120 }}>
          <div
            style={{
              flex: 1,
              border: `1px solid ${col.highlight ? "#c6ff4a" : "#33332e"}`,
              borderRadius: 4,
              padding: "clamp(8px,1.4vw,16px)",
              background: col.highlight ? "rgba(198,255,74,0.06)" : "transparent",
            }}
          >
            <p
              className="chart-annotation"
              style={{ color: col.highlight ? "#c6ff4a" : "#f2f1ec", marginBottom: 6 }}
            >
              {col.label}
            </p>
            {col.items.map((item) => (
              <p key={item} className="chart-annotation-muted" style={{ lineHeight: 1.6 }}>
                {item}
              </p>
            ))}
          </div>
          {i < columns.length - 1 && (
            <span
              className="chart-annotation-muted"
              style={{ padding: "0 clamp(4px,1vw,14px)", fontSize: 18 }}
              aria-hidden="true"
            >
              →
            </span>
          )}
        </div>
      ))}
      {loop && (
        <span className="chart-annotation-muted" style={{ padding: "0 10px", fontSize: 18 }} aria-hidden="true">
          ↻
        </span>
      )}
    </div>
  );
}
