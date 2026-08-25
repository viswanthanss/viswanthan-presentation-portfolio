import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { getAdjacentProjects, Project } from "../data/projects";
import ScrollProgress from "./ScrollProgress";
import "./CaseStudyLayout.css";

type Props = {
  project: Project;
  thesis: ReactNode;
  challenge: ReactNode;
  approach: ReactNode;
  outcome: ReactNode;
  children: ReactNode;
};

export default function CaseStudyLayout({
  project,
  thesis,
  challenge,
  approach,
  outcome,
  children,
}: Props) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <>
      <ScrollProgress />
      <article className="case-study">
        <div className="wrap">
          <Link to="/work" className="case-back">
            ← Back to work
          </Link>

          <div className="case-meta" data-reveal>
            <span className="label-chip">
              <span className="dot" />
              {project.status}
            </span>
            <span className="eyebrow">{project.category}</span>
          </div>

          <h1 className="case-title" data-reveal>{project.title}</h1>
          <p className="case-thesis" data-reveal>{thesis}</p>

          <div className="case-ca grid-12" data-reveal>
            <div className="case-ca-block">
              <span className="eyebrow">Challenge</span>
              <p>{challenge}</p>
            </div>
            <div className="case-ca-block">
              <span className="eyebrow">Approach</span>
              <p>{approach}</p>
            </div>
          </div>
        </div>

        <div className="wrap case-slides">{children}</div>

        <div className="wrap">
          <div className="case-outcome" data-reveal>
            <span className="eyebrow">Outcome</span>
            <p>{outcome}</p>
          </div>

          <div className="case-pager">
            <Link to={`/work/${prev.slug}`} className="case-pager-link">
              <span className="eyebrow">Previous project</span>
              <span className="case-pager-title">{prev.title}</span>
            </Link>
            <Link to={`/work/${next.slug}`} className="case-pager-link case-pager-link--next">
              <span className="eyebrow">Next project</span>
              <span className="case-pager-title">{next.title}</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
