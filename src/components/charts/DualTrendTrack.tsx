import "./charts.css";

type Track = { title: string; unit: string; categories: string[]; values: number[]; format: (v: number) => string; color: string };
const W = 640;
const H = 90;
const PAD_X = 4;
const PAD_Y = 14;
function Sparkline({ track }: { track: Track }) {
  const min = Math.min(...track.values);
  const max = Math.max(...track.values);
  const range = max - min || 1;
  const innerW = W - PAD_X * 2;
  const innerH = H - PAD_Y * 2;
  const x = (i: number) => PAD_X + (i / (track.values.length - 1)) * innerW;
  const y = (v: number) => PAD_Y + innerH - ((v - min) / range) * innerH;
  const points = track.values.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  return <svg viewBox={`0 0 ${W} ${H}`} className="chart" style={{ height: H }} aria-hidden="true"><line x1={PAD_X} x2={W - PAD_X} y1={H - PAD_Y} y2={H - PAD_Y} className="chart-axis" /><polyline points={points} fill="none" stroke={track.color} strokeWidth={2.5} strokeLinejoin="round" strokeLinecap="round" /><circle cx={x(0)} cy={y(track.values[0])} r={3} fill={track.color} /><circle cx={x(track.values.length - 1)} cy={y(track.values[track.values.length - 1])} r={3} fill={track.color} /></svg>;
}
export default function DualTrendTrack({ tracks, firstCategory, lastCategory, annotation, label }: { tracks: Track[]; firstCategory: string; lastCategory: string; annotation?: string; label: string }) {
  return <div role="img" aria-label={label} style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: 18 }}>{tracks.map((track, i) => <div key={track.title}><div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}><span className="chart-annotation" style={{ color: track.color, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", fontSize: 11 }}>{track.title}</span><span className="chart-annotation-muted">{track.unit}</span></div><Sparkline track={track} /><div style={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}><span className="chart-annotation-muted">{firstCategory} {track.format(track.values[0])}</span><span className="chart-annotation">→ {lastCategory} {track.format(track.values[track.values.length - 1])}</span></div>{i < tracks.length - 1 && <div style={{ height: 1, background: "var(--slide-grid, #24241f)", marginTop: 16 }} />}</div>)}{annotation && <p className="chart-annotation" style={{ marginTop: 4 }}>{annotation}</p>}</div>;
}
