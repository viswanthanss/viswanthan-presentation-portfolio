import { Link } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { SOCIAL_LINKS, CONTACT_EMAIL } from "../config";
import ProjectCard from "../components/ProjectCard";
import { useReveal } from "../hooks/useReveal";
import "./Home.css";

const process = [
  { step: "01", title: "Understand", body: "Read the material until the actual decision the audience has to make is clear — not the topic, the decision." },
  { step: "02", title: "Structure", body: "Build the argument in outline before touching layout: what claim each slide makes, and what it removes from the one before it." },
  { step: "03", title: "Visualize", body: "Choose the chart, diagram or layout that proves the claim — never one that just illustrates the topic." },
  { step: "04", title: "Refine", body: "Cut whatever doesn't change the audience's mind. If a slide survives that cut, it earns its place." },
];

const homepageOrder = ["data-storytelling", "strategy", "executive-one-pager", "redesign"];

export default function Home() {
  const ref = useReveal<HTMLDivElement>();
  const flagship = getProjectBySlug("pitch-deck")!;
  return (
    <div ref={ref}>
      <section className="hero"><div className="wrap">
        <p className="hero-eyebrow" data-reveal>Presentation Designer · Visual Storytelling</p>
        <h1 className="hero-name" data-reveal>Viswanthan S S</h1>
        <h2 className="hero-headline" data-reveal>I turn strategy, data and complex ideas into presentations people can understand, remember and act on.</h2>
        <div className="hero-cta" data-reveal><Link to="/work" className="btn btn-primary">View work</Link>{SOCIAL_LINKS.linkedin && <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>}</div>
      </div></section>
      <section className="wrap selected-work">
        <div className="selected-work-head" data-reveal><span className="eyebrow">Selected work</span><h2>Five presentations. Five different communication problems.</h2></div>
        <ProjectCard project={flagship} />
        <div>{homepageOrder.map((slug) => { const p = getProjectBySlug(slug); return p ? <ProjectCard key={p.slug} project={p} /> : null; })}</div>
      </section>
      <section className="wrap process-section"><div className="process-head" data-reveal><span className="eyebrow">Design approach</span><h2>How a brief becomes a deck.</h2></div><div className="process-grid">{process.map((p) => <div className="process-item" key={p.step} data-reveal><span className="process-step">{p.step}</span><h3 className="process-title">{p.title}</h3><p className="process-body">{p.body}</p></div>)}</div></section>
      <section className="wrap about-section"><div className="about-grid"><div data-reveal><span className="eyebrow">About</span><h2 className="about-headline">I work at the point where a business argument still needs a shape.</h2></div><div data-reveal><p className="about-body">Most of the presentations I'm handed already have the content — a strategy, a dataset, a set of decisions someone needs to explain. What's usually missing is the structure that makes the content persuasive: which fact is the headline, which chart proves it, and what gets cut so the argument survives a ten-minute read.</p><p className="about-body">I work across presentation design, information design, data visualization and executive communication — pitch decks, business reviews, one-pagers, strategy narratives. The common thread is finding the one relationship in a set of facts that's worth building a slide around.</p><Link to="/about" className="about-link">More about how I work →</Link></div></div></section>
      <section className="wrap contact-section" data-reveal><h2 className="contact-headline">Have a complex story that needs clarity?</h2><div className="contact-links"><a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">{CONTACT_EMAIL}</a>{SOCIAL_LINKS.linkedin && <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>}</div></section>
    </div>
  );
}
