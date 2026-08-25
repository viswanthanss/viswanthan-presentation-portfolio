import { getProjectBySlug } from "../../data/projects";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import PresentationSlide from "../../components/PresentationSlide";
import StatRow from "../../components/charts/StatRow";
import Matrix2x2 from "../../components/charts/Matrix2x2";
import FlowRow from "../../components/charts/FlowRow";
import AllocationBar from "../../components/charts/AllocationBar";
import Timeline from "../../components/charts/Timeline";
import { useReveal } from "../../hooks/useReveal";

export default function Strategy() {
  const project = getProjectBySlug("strategy")!;
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <CaseStudyLayout
        project={project}
        thesis="A fictional B2B technology company weighing three growth paths, built for a leadership team that needs one answer, not three options."
        challenge="Where should the company concentrate investment over the next 18 months? The deck has to turn a genuine strategic debate into a single, defensible recommendation."
        approach="Each slide narrows the field — from three paths, to a positioning matrix, to a prioritized allocation, to a dated roadmap with named risks — so the recommendation feels earned rather than asserted."
        outcome="Demonstrates the ability to translate a strategic question into frameworks a leadership team can actually decide against: a matrix, an allocation, a roadmap, a risk register."
      >
        <PresentationSlide slideNumber="01" eyebrow="The question" variant="metrics"
          title="Three growth paths. One strategic priority.">
          <StatRow
            stats={[
              { value: "A", label: "Expand existing accounts" },
              { value: "B", label: "Enter adjacent segment" },
              { value: "C", label: "Launch new category" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="02" eyebrow="Positioning" variant="matrix"
          title="The market is attractive. Our advantage is strongest where workflow complexity is highest.">
          <Matrix2x2
            xLabel="Market attractiveness"
            yLabel="Right to win"
            xLowHigh={["Low", "High"]}
            yLowHigh={["Low", "High"]}
            points={[
              { label: "Core enterprise workflow", x: 78, y: 85, highlight: true },
              { label: "Adjacent SMB workflow", x: 55, y: 50 },
              { label: "Consumer", x: 30, y: 20 },
              { label: "New category", x: 65, y: 25 },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="03" eyebrow="Priorities" variant="metrics"
          title="Prioritize depth before breadth.">
          <StatRow
            stats={[
              { value: "01", label: "Expand core accounts" },
              { value: "02", label: "Increase platform adoption" },
              { value: "03", label: "Build selective adjacent capabilities" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="04" eyebrow="The mechanism" variant="diagram"
          title="The strategy is a flywheel, not a list of initiatives.">
          <FlowRow
            loop
            columns={[
              { label: "Adoption", items: ["More usage"] },
              { label: "Workflow data", items: ["More signal"] },
              { label: "Product value", items: ["Higher value"], highlight: true },
              { label: "Retention → expansion", items: ["Compounds back"] },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="05" eyebrow="Investment" variant="chart"
          title="Investment should follow the highest-leverage loop."
          footnote="Illustrative strategic model.">
          <AllocationBar
            segments={[
              { label: "Core product", pct: 45, highlight: true },
              { label: "Enterprise expansion", pct: 25 },
              { label: "Customer success", pct: 20 },
              { label: "Selective experiments", pct: 10 },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="06" eyebrow="Roadmap" variant="timeline"
          title="18 months to move from adoption to expansion.">
          <Timeline
            stages={[
              { period: "Q1–Q2", title: "Strengthen", description: "Core workflow" },
              { period: "Q3", title: "Expand", description: "Enterprise capabilities" },
              { period: "Q4", title: "Launch", description: "Selective adjacent features" },
              { period: "Q5–Q6", title: "Scale", description: "Expansion engine" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="07" eyebrow="Risk" variant="metrics"
          title="Three risks could break the strategy.">
          <StatRow
            stats={[
              { value: "01", label: "Feature sprawl — mitigated by strict product prioritization" },
              { value: "02", label: "Enterprise complexity — mitigated by modular implementation" },
              { value: "03", label: "Weak activation — mitigated by dedicated adoption milestones" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="08" eyebrow="Orbit 2027" variant="closing"
          title="The strategic choice isn't where can we grow — it's where can we build an advantage that compounds."
          subtitle="Recommendation: prioritize core enterprise workflows first."
          footnote="Illustrative strategy study." />
      </CaseStudyLayout>
    </div>
  );
}
