import { useReveal } from "../hooks/useReveal";

const capabilities = [
  "Presentation Design",
  "Pitch Decks",
  "Data Visualization",
  "Information Design",
  "Executive Communication",
  "Visual Systems",
];

const tools = ["Figma", "PowerPoint", "Adobe Illustrator", "Adobe Photoshop", "Keynote"];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="wrap" style={{ paddingTop: "var(--space-6)", paddingBottom: "var(--space-7)" }}>
      <div className="grid-12">
        <div style={{ gridColumn: "span 8" }} data-reveal>
          <span className="eyebrow">About</span>
          <h1 style={{ fontSize: "clamp(32px, 4.6vw, 54px)", marginTop: 12, maxWidth: "16ch" }}>
            I design presentations to make complex information easier to
            understand.
          </h1>
          <p style={{ marginTop: 24, fontSize: 17, lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: "58ch" }}>
            I work at the intersection of visual communication, information
            design and storytelling — shaping dense ideas, data and strategy
            into presentation-ready narratives.
          </p>
        </div>
      </div>

      <div className="grid-12" style={{ marginTop: "var(--space-7)", gap: "var(--space-5) var(--space-3)" }}>
        <div style={{ gridColumn: "span 6" }} data-reveal>
          <span className="eyebrow">Capabilities</span>
          <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
            {capabilities.map((c) => (
              <li key={c} style={{ borderTop: "1px solid var(--border)", paddingTop: 10, fontSize: 16 }}>
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ gridColumn: "span 6" }} data-reveal>
          <span className="eyebrow">Tools</span>
          <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
            {tools.map((t) => (
              <li key={t} style={{ borderTop: "1px solid var(--border)", paddingTop: 10, fontSize: 16 }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
