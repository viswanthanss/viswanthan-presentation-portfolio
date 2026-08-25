import { getProjectBySlug } from "../../data/projects";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import { useReveal } from "../../hooks/useReveal";
import "./ExecutiveOnePager.css";

const sections = [
  {
    title: "The opportunity",
    body: "Operational data is increasingly fragmented across ERP, CRM, support and finance systems.",
  },
  {
    title: "The signal",
    body: "More data does not automatically create better decisions. The bottleneck is context.",
  },
  {
    title: "The response",
    body: "Northstar creates a shared operational layer that connects signals, explains anomalies and prioritizes action.",
  },
  {
    title: "Strategic implication",
    body: "The category is moving from reporting what happened toward helping teams decide what matters.",
  },
  {
    title: "Next step",
    body: "Validate the highest-frequency decision workflows with 3–5 operating teams.",
  },
];

export default function ExecutiveOnePager() {
  const project = getProjectBySlug("executive-one-pager")!;
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <CaseStudyLayout
        project={project}
        thesis="The Northstar narrative, compressed from a twelve-slide pitch into a single document a leadership team can read in under three minutes."
        challenge="A one-pager fails the moment it starts looking like a shrunken deck. It needs the density and hierarchy of a real executive document — something built to be read, not presented."
        approach="Everything the audience needs sits in one page: a headline finding, the supporting metrics, the three-stage response, and a single next step. No slide furniture, no bullet sprawl."
        outcome="Demonstrates the ability to condense a long-form narrative into a dense, print-ready executive artifact without losing the argument."
      >
        <div className="onepager" data-reveal>
          <div className="onepager-header">
            <div>
              <span className="onepager-eyebrow">Northstar</span>
              <h3 className="onepager-title">Executive brief</h3>
            </div>
            <span className="onepager-date">Portfolio demonstration</span>
          </div>

          <h4 className="onepager-headline">
            Operational intelligence is becoming a decision-layer problem.
          </h4>

          <p className="onepager-takeaway">
            Companies have invested heavily in systems of record. The next
            opportunity is connecting those systems into a layer that helps
            teams decide what matters next.
          </p>

          <div className="onepager-metrics">
            <div>
              <span className="onepager-metric-value">5+</span>
              <span className="onepager-metric-label">Systems used by a typical operating team</span>
            </div>
            <div>
              <span className="onepager-metric-value">3.7 hrs</span>
              <span className="onepager-metric-label">Weekly reporting reconciliation</span>
            </div>
            <div>
              <span className="onepager-metric-value">61%</span>
              <span className="onepager-metric-label">Managers relying on manual updates</span>
            </div>
          </div>

          <div className="onepager-stages">
            {["Connect", "Explain", "Act"].map((s, i) => (
              <div className="onepager-stage" key={s}>
                <span className="onepager-stage-number">0{i + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>

          <div className="onepager-sections">
            {sections.map((s) => (
              <div className="onepager-section" key={s.title}>
                <span className="onepager-section-title">{s.title}</span>
                <p>{s.body}</p>
              </div>
            ))}
          </div>

          <div className="onepager-footer">
            Illustrative design study · Visual storytelling / information design
          </div>
        </div>
      </CaseStudyLayout>
    </div>
  );
}
