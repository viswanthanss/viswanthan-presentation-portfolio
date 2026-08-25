import "./charts.css";

type Stat = { value: string; label: string };

export default function StatRow({ stats }: { stats: Stat[] }) {
  return (
    <div className="stat-row" style={{ alignItems: "flex-end", flex: 1 }}>
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
