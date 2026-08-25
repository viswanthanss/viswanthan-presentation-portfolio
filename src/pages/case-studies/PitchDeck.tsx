import { getProjectBySlug } from "../../data/projects";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import PresentationSlide from "../../components/PresentationSlide";
import StatRow from "../../components/charts/StatRow";
import FlowRow from "../../components/charts/FlowRow";
import BarChart from "../../components/charts/BarChart";
import Matrix2x2 from "../../components/charts/Matrix2x2";
import Timeline from "../../components/charts/Timeline";
import ComparisonMatrix from "../../components/charts/ComparisonMatrix";
import AllocationBar from "../../components/charts/AllocationBar";
import { useReveal } from "../../hooks/useReveal";

export default function PitchDeck() {
  const project = getProjectBySlug("pitch-deck")!;
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <CaseStudyLayout
        project={project}
        thesis="A fictional B2B operations-intelligence platform, pitched to seed and Series A investors without drowning them in infrastructure detail."
        challenge="The product is technically complex. The deck has to make the opportunity legible without overwhelming the audience with how the system actually works underneath."
        approach="One line of argument runs through all twelve slides: operational data is everywhere, but decisions are still fragmented. Every slide either builds that tension or resolves it."
        outcome="Demonstrates the ability to structure complex business information into a clear, investor-ready narrative arc — problem, market, product, model, proof, and roadmap in a single throughline."
      >
        <PresentationSlide slideNumber="01" eyebrow="Northstar" variant="hero"
          title="Operational data is everywhere. Decisions are still fragmented."
          subtitle="Northstar turns fragmented operational signals into one decision layer.">
          <FlowRow
            columns={[
              { label: "Sources", items: ["ERP", "CRM", "Support", "Finance"] },
              { label: "Northstar", items: ["Normalize", "Connect"], highlight: true },
              { label: "Decision layer", items: ["Alerts", "Recommendations"] },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="02" eyebrow="The problem" variant="metrics"
          title="The operational stack keeps growing. The decision layer hasn't.">
          <StatRow
            stats={[
              { value: "42%", label: "Operational teams work across 5+ systems" },
              { value: "3.7 hrs", label: "Avg. weekly time spent reconciling reports" },
              { value: "61%", label: "Managers rely on manually assembled updates" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="03" eyebrow="The problem" variant="diagram"
          title="The problem isn't missing data. It's disconnected context."
          subtitle="Different systems. Different definitions. Different decisions.">
          <FlowRow
            columns={[
              { label: "Sales", items: ["CRM"] },
              { label: "Operations", items: ["ERP"] },
              { label: "Customer", items: ["Support"] },
              { label: "Finance", items: ["Billing"] },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="04" eyebrow="Why now" variant="metrics"
          title="Why now"
          subtitle="The advantage is no longer having more data — it's connecting the right signals at the right moment.">
          <StatRow
            stats={[
              { value: "01", label: "More systems — teams operate across increasingly fragmented stacks" },
              { value: "02", label: "More data — operational signals grow faster than teams can interpret them" },
              { value: "03", label: "Faster decisions — teams must move from reporting to action" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="05" eyebrow="Market" variant="metrics"
          title="A large category is forming around operational intelligence."
          footnote="Illustrative figures created for portfolio demonstration.">
          <StatRow
            stats={[
              { value: "$18.4B", label: "Total addressable market" },
              { value: "$4.6B", label: "Serviceable addressable market" },
              { value: "$620M", label: "Serviceable obtainable market" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="06" eyebrow="Product" variant="diagram"
          title="One layer between the systems and the decision.">
          <FlowRow
            columns={[
              { label: "Data sources", items: ["ERP · CRM", "Support · Finance"] },
              { label: "Northstar", items: ["Normalize", "Connect", "Prioritize", "Explain"], highlight: true },
              { label: "Decision layer", items: ["Alerts", "Forecasts", "Executive views"] },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="07" eyebrow="Product" variant="dashboard"
          title="From fragmented signals to one operating picture.">
          <StatRow
            stats={[
              { value: "$12.8M", label: "Revenue" },
              { value: "17", label: "At-risk accounts" },
              { value: "42", label: "Open operational issues" },
              { value: "87%", label: "Forecast confidence" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="08" eyebrow="Business model" variant="chart"
          title="The model scales with the complexity of the operation."
          footnote="Illustrative commercial model.">
          <AllocationBar
            segments={[
              { label: "Platform subscription — $3,000–$12,000/mo", pct: 60, highlight: true },
              { label: "Implementation — one-time onboarding", pct: 25 },
              { label: "Expansion — teams + data sources", pct: 15 },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="09" eyebrow="Competitive position" variant="comparison"
          title="Northstar competes on context, not another dashboard.">
          <ComparisonMatrix
            columns={["Generic BI", "Data warehouse", "Point tools", "Northstar"]}
            highlightColumn={3}
            rows={[
              { dimension: "Connects operational context", values: [false, false, false, true] },
              { dimension: "Explains anomalies", values: [false, false, true, true] },
              { dimension: "Prioritizes decisions", values: [false, false, false, true] },
              { dimension: "Cross-functional view", values: [true, true, false, true] },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="10" eyebrow="Early proof" variant="metrics"
          title={<>Does the system change decisions?</>}
          footnote="Illustrative outcome model — not representative of real client results.">
          <StatRow
            stats={[
              { value: "↓38%", label: "Report reconciliation effort" },
              { value: "+24%", label: "Faster weekly decision cycles" },
              { value: "3.2×", label: "More operational signals reviewed" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="11" eyebrow="Roadmap" variant="timeline"
          title="Build the decision layer in three stages.">
          <Timeline
            stages={[
              { period: "Q1", title: "Connect", description: "Unify operational signals" },
              { period: "Q2", title: "Explain", description: "Surface patterns and anomalies" },
              { period: "Q3", title: "Act", description: "Recommend next-best actions" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="12" eyebrow="Northstar" variant="closing"
          title="The next generation of operations software won't just report what happened. It will explain what matters and what to do next."
          subtitle="Northstar — decision intelligence for modern operations." />
      </CaseStudyLayout>
    </div>
  );
}
