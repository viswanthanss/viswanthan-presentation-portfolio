import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { useReveal } from "../hooks/useReveal";
import "./Home.css";

export default function Home() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <section className="hero">
        <div className="wrap">
          <span className="label-chip" data-reveal>
            <span className="dot" />
            Freelance · Presentation Design
          </span>

          <h1 className="hero-name" data-reveal>
            Viswanthan S S
          </h1>

          <p className="hero-role" data-reveal>
            Visual storytelling · Information design · Data visualization · Pitch decks
          </p>

          <h2 className="hero-headline" data-reveal>
            I turn complex information into clear, persuasive visual narratives.
          </h2>

          <p className="hero-support" data-reveal>
            Presentation design for people who need ideas, data and strategy to be
            understood quickly — and remembered.
          </p>

          <div className="hero-cta" data-reveal>
            <Link to="/work" className="btn btn-primary">
              View selected work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap selected-work">
        <div className="selected-work-head" data-reveal>
          <span className="eyebrow">Selected work</span>
          <h2>Five presentations. Five different communication problems.</h2>
        </div>

        <div>
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
