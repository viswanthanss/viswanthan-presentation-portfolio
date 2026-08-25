import { Link } from "react-router-dom";
import { Project } from "../data/projects";
import "./ProjectCard.css";

function CardPreview({ slug }: { slug: string }) {
  switch (slug) {
    case "pitch-deck":
      return (
        <svg viewBox="0 0 320 180" className="preview-svg">
          {["ERP", "CRM", "Support", "Finance"].map((n, i) => (
            <g key={n}>
              <rect x={16} y={20 + i * 34} width={60} height={20} rx={2} fill="none" stroke="#33332e" />
              <text x={46} y={20 + i * 34 + 14} textAnchor="middle" className="pv-label">{n}</text>
              <line x1={76} y1={20 + i * 34 + 10} x2={140} y2={90} stroke="#33332e" />
            </g>
          ))}
          <rect x={140} y={70} width={80} height={40} rx={2} fill="#c6ff4a" opacity={0.14} stroke="#c6ff4a" />
          <text x={180} y={94} textAnchor="middle" className="pv-label pv-accent">NORTHSTAR</text>
          <line x1={220} y1={90} x2={280} y2={90} stroke="#c6ff4a" />
          <rect x={280} y={72} width={30} height={36} rx={2} fill="none" stroke="#33332e" />
        </svg>
      );
    case "data-storytelling":
      return (
        <svg viewBox="0 0 320 180" className="preview-svg">
          <polyline points="20,150 60,140 100,128 140,110 180,86 220,54 260,30 300,14" fill="none" stroke="#33332e" strokeWidth={2} />
          <polyline points="20,150 60,146 100,140 140,134 180,128 220,120 260,116 300,110" fill="none" stroke="#c6ff4a" strokeWidth={2.5} />
        </svg>
      );
    case "executive-one-pager":
      return (
        <svg viewBox="0 0 320 180" className="preview-svg">
          <rect x={20} y={16} width={280} height={148} fill="none" stroke="#33332e" />
          <rect x={36} y={32} width={120} height={10} fill="#c6ff4a" opacity={0.6} />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={36} y={58 + i * 20} width={248 - i * 12} height={6} fill="#33332e" />
          ))}
        </svg>
      );
    case "strategy":
      return (
        <svg viewBox="0 0 320 180" className="preview-svg">
          <line x1={160} y1={20} x2={160} y2={160} stroke="#33332e" />
          <line x1={30} y1={90} x2={290} y2={90} stroke="#33332e" />
          <circle cx={215} cy={50} r={7} fill="#c6ff4a" />
          <circle cx={110} cy={120} r={5} fill="#6b6b66" />
          <circle cx={230} cy={130} r={5} fill="#6b6b66" />
          <circle cx={80} cy={60} r={5} fill="#6b6b66" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 320 180" className="preview-svg">
          <rect x={20} y={20} width={130} height={140} fill="none" stroke="#33332e" />
          <rect x={30} y={40} width={60} height={6} fill="#33332e" />
          <rect x={30} y={56} width={90} height={6} fill="#33332e" />
          <line x1={170} y1={90} x2={190} y2={90} stroke="#c6ff4a" markerEnd="url(#a)" />
          <rect x={190} y={20} width={110} height={140} fill="none" stroke="#c6ff4a" />
          <rect x={200} y={40} width={70} height={6} fill="#c6ff4a" />
          <rect x={200} y={56} width={40} height={22} fill="#c6ff4a" opacity={0.5} />
        </svg>
      );
  }
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card" data-reveal>
      <div className="project-card-preview">
        <CardPreview slug={project.slug} />
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
