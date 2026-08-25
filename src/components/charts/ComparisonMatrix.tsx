import "./charts.css";

export default function ComparisonMatrix({
  columns,
  rows,
  highlightColumn,
}: {
  columns: string[];
  rows: { dimension: string; values: boolean[] }[];
  highlightColumn: number;
}) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ display: "grid", gridTemplateColumns: `1.4fr repeat(${columns.length}, 1fr)`, gap: 6 }}>
        <div />
        {columns.map((c, i) => (
          <p
            key={c}
            className="chart-annotation"
            style={{
              textAlign: "center",
              color: i === highlightColumn ? "#c6ff4a" : "#f2f1ec",
            }}
          >
            {c}
          </p>
        ))}

        {rows.map((row) => (
          <>
            <p key={row.dimension} className="chart-annotation-muted" style={{ alignSelf: "center" }}>
              {row.dimension}
            </p>
            {row.values.map((v, i) => (
              <p
                key={`${row.dimension}-${i}`}
                style={{
                  textAlign: "center",
                  color: v ? (i === highlightColumn ? "#c6ff4a" : "#f2f1ec") : "#4a4a44",
                  fontSize: 14,
                }}
              >
                {v ? "●" : "–"}
              </p>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
