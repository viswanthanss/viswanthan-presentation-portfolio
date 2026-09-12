import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import PresentationSlide from "./PresentationSlide";
import StatRow from "./charts/StatRow";
import FlowRow from "./charts/FlowRow";
import DualTrendTrack from "./charts/DualTrendTrack";
import Matrix2x2 from "./charts/Matrix2x2";
import { northstarTheme, growthTheme, orbitTheme } from "../theme";
import "./ProjectCard.css";

function CardPreview({ slug }: { slug: string }) {
  switch (slug) {
    case "pitch-deck":
      return (
        <PresentationSlide
          theme={northstarTheme}
          variant="hero"
          eyebrow="Northstar"
          title="Operational data is everywhere. Decisions are still fragmented."
        >
          <FlowRow
            label=""
            columns={[
              { label: "Sources", items: ["ERP · CRM"] },
              { label: "Northstar", items: ["Normalize"], highlight: true },
              { label: "Decisions", items: ["Alerts"] },
            ]}
          />
        </PresentationSlide>
      );
    case "data-storytelling":
      return (
        <PresentationSlide theme={growthTheme} variant="chart" eyebrow="The Growth Engine"
          title="Acquisition is accelerating. Retention rate is declining.">
          <DualTrendTrack
            label=""
            firstCategory="Jan"
            lastCategory="Dec"
            tracks={[
              {
                title: "Acquisition index",
                unit: "Indexed, Jan = 100",
                categories: ["Jan", "Apr", "Jul", "Oct", "Dec"],
                values: [100, 126, 164, 207, 243],
                format: (v) => `${v}`,
                color: growthTheme.accent!,
              },
              {
                title: "90-day retention",
                unit: "% of cohort",
                categories: ["Jan", "Apr", "Jul", "Oct", "Dec"],
                values: [74, 66, 58, 50, 45],
                format: (v) => `${v}%`,
                color: growthTheme.off!,
              },
            ]}
          />
        </PresentationSlide>
      );
    case "executive-one-pager":
      return (
        <div className="onepager-preview" aria-hidden="true">
          <div className="onepager-preview-rule" />
          <p className="onepager-preview-headline">
            Operational intelligence is becoming a decision-layer problem.
          </p>
          <div className="onepager-preview-lines">
            <span style={{ width: "78%" }} />
            <span style={{ width: "64%" }} />
            <span style={{ width: "70%" }} />
          </div>
        </div>
      );
    case "strategy":
      return (
        <PresentationSlide theme={orbitTheme} variant="matrix" eyebrow="Orbit 2027"
          title="The advantage is strongest where workflow complexity is highest.">
          <Matrix2x2
            label=""
            xLabel="Market attractiveness"
            yLabel="Right to win"
            xLowHigh={["Low", "High"]}
            yLowHigh={["Low", "High"]}
            points={[
              { label: "Core workflow", x: 78, y: 85, highlight: true },
              { label: "Adjacent", x: 55, y: 50 },
              { label: "New category", x: 30, y: 22 },
            ]}
          />
        </PresentationSlide>
      );
    default:
      return (
        <PresentationSlide theme={northstarTheme} variant="metrics" eyebrow="Redesign study"
          title="Four equal-weight metrics become one visual argument.">
          <StatRow
            label=""
            stats={[
              { value: "+31%", label: "Customer growth" },
              { value: "−8 pts", label: "Retention" },
            ]}
          />
        </PresentationSlide>
      );
  }
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card" data-reveal>
      <div className="project-card-preview" aria-hidden="true">
        <div className="project-card-preview-scale">
          <CardPreview slug={project.slug} />
        </div>
      </div>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span className="project-card-number">{project.number}</span>
          <span className="eyebrow">{project.category}</span>
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-tags">
          {project.tags.map((t) => (
            <span key={t} className="project-card-tag">{t}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
