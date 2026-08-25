import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useReveal } from "../hooks/useReveal";

export default function Work() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="wrap" style={{ paddingTop: "var(--space-6)", paddingBottom: "var(--space-6)" }}>
      <div data-reveal style={{ maxWidth: "60ch", marginBottom: "var(--space-5)" }}>
        <span className="eyebrow">Work</span>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", marginTop: 10 }}>Selected presentations</h1>
        <p style={{ marginTop: 14, color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.6 }}>
          Five self-directed case studies, each built around a real communication
          problem — a pitch, a business review, an executive brief, a strategy
          decision, and a redesign.
        </p>
      </div>

      <div>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
