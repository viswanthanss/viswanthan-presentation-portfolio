import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { getAdjacentProjects, Project } from "../data/projects";
import ScrollProgress from "./ScrollProgress";
import ConceptBadge from "./ConceptBadge";
import "./CaseStudyLayout.css";

export type ProjectMeta = { role: string; brief: string; audience: string; scope: string; output: string; status: string };

type Props = { project: Project; meta: ProjectMeta; thesis: ReactNode; problem: ReactNode; designDecision: ReactNode; narrativeStrategy: ReactNode; visualSystem: ReactNode; keyDecisions: string[]; outcome: string[]; children: ReactNode };

export default function CaseStudyLayout({ project, meta, thesis, problem, designDecision, narrativeStrategy, visualSystem, keyDecisions, outcome, children }: Props) {
  const { next } = getAdjacentProjects(project.slug);
  const metaRows: [string, string][] = [["Role", meta.role], ["Brief", meta.brief], ["Audience", meta.audience], ["Scope", meta.scope], ["Output", meta.output], ["Status", meta.status]];
  return <><ScrollProgress /><article className="case-study"><div className="wrap">
    <Link to="/work" className="case-back">← Back to work</Link>
    <p className="eyebrow" data-reveal>{project.category}</p>
    <h1 className="case-title" data-reveal>{project.title}</h1>
    <div className="case-badge-row" data-reveal><ConceptBadge label={meta.status} /></div>
    <p className="case-thesis" data-reveal>{thesis}</p>
    <div className="case-meta-row" data-reveal>{metaRows.map(([k, v]) => <div key={k} className="case-meta-item"><span className="case-meta-key">{k}</span><span className="case-meta-value">{v}</span></div>)}</div>
    <div className="case-section grid-12" data-reveal><h2 className="case-section-title">The problem</h2><div className="case-section-body">{problem}</div></div>
    <div className="case-section grid-12" data-reveal><h2 className="case-section-title">The design decision</h2><div className="case-section-body">{designDecision}</div></div>
    <div className="case-section-pair grid-12" data-reveal><div className="case-section-pair-block"><h2 className="case-section-title">Narrative strategy</h2><div className="case-section-body">{narrativeStrategy}</div></div><div className="case-section-pair-block"><h2 className="case-section-title">Visual system</h2><div className="case-section-body">{visualSystem}</div></div></div>
    <p className="eyebrow case-slides-label" data-reveal>Selected slides</p>
  </div><div className="wrap case-slides">{children}</div><div className="wrap">
    <div className="case-section grid-12" data-reveal><h2 className="case-section-title">Key design decisions</h2><ul className="case-decision-list">{keyDecisions.map((d) => <li key={d}>{d}</li>)}</ul></div>
    <div className="case-section grid-12" data-reveal><h2 className="case-section-title">Outcome / learning</h2><ul className="case-outcome-list">{outcome.map((o) => <li key={o}>{o}</li>)}</ul></div>
    <div className="case-pager"><span className="eyebrow">Next project</span><Link to={`/work/${next.slug}`} className="case-pager-title">{next.title} →</Link></div>
  </div></article></>;
}
