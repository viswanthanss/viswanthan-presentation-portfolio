import { getProjectBySlug } from "../../data/projects";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import PresentationSlide from "../../components/PresentationSlide";
import StatRow from "../../components/charts/StatRow";
import LineChart from "../../components/charts/LineChart";
import BarChart from "../../components/charts/BarChart";
import Funnel from "../../components/charts/Funnel";
import { useReveal } from "../../hooks/useReveal";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const newCustomers = [420, 455, 490, 530, 575, 620, 690, 740, 805, 870, 940, 1020];
const retained = [310, 325, 338, 350, 364, 375, 398, 410, 425, 438, 449, 458];

export default function DataStorytelling() {
  const project = getProjectBySlug("data-storytelling")!;
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <CaseStudyLayout
        project={project}
        thesis="A fictional subscription business has strong acquisition growth and weakening retention. The deck has to separate the two before the board reads the headline number as good news."
        challenge="Growth looks healthy until retention is separated from acquisition. Every chart in this deck has to carry the argument, not just display a metric."
        approach="Structured as data → insight → decision: each slide narrows from a broad metric to a specific, actionable finding, ending on one recommendation rather than a list of observations."
        outcome="Demonstrates the ability to read a business problem out of a dataset and translate it into a chart sequence a non-technical stakeholder can follow in one pass."
      >
        <PresentationSlide slideNumber="01" eyebrow="The headline" variant="metrics"
          title="Growth is up. But the engine is losing efficiency.">
          <StatRow
            stats={[
              { value: "+31%", label: "New customers" },
              { value: "+24%", label: "Revenue" },
              { value: "−8 pts", label: "90-day retention" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="02" eyebrow="The divergence" variant="chart"
          title="Acquisition is accelerating faster than retention."
          footnote="Illustrative data.">
          <LineChart
            categories={months}
            series={[
              { label: "New customers", color: "#c6ff4a", values: newCustomers },
              { label: "90-day retained", color: "#6b6b66", values: retained },
            ]}
            annotation="New customer growth nearly doubles across the year. Retention barely moves."
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="03" eyebrow="Where it concentrates" variant="chart"
          title="The retention problem is concentrated in one segment.">
          <BarChart
            bars={[
              { label: "SMB", value: 54, display: "54%", highlight: true },
              { label: "Mid-market", value: 71, display: "71%" },
              { label: "Enterprise", value: 84, display: "84%" },
            ]}
            max={100}
            insight="SMB contributes the most new logos but loses the most customers."
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="04" eyebrow="Where it breaks" variant="chart"
          title="The funnel breaks after activation.">
          <Funnel
            stages={[
              { label: "Sign-up", value: 100 },
              { label: "Activated", value: 72 },
              { label: "First value achieved", value: 51, highlightDrop: true },
              { label: "Week-4 active", value: 38 },
              { label: "90-day retained", value: 29 },
            ]}
            note="Acquisition is not the bottleneck. Time-to-value is."
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="05" eyebrow="The lever" variant="chart"
          title="Customers who reach value in week one are 2.4× more likely to retain.">
          <BarChart
            bars={[
              { label: "Time-to-value < 7 days", value: 72, display: "72%", highlight: true },
              { label: "7–14 days", value: 58, display: "58%" },
              { label: "15–30 days", value: 41, display: "41%" },
              { label: "30+ days", value: 30, display: "30%" },
            ]}
            max={100}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="06" eyebrow="The recommendation" variant="metrics"
          title="The highest-leverage move isn't more acquisition. It's faster time-to-value.">
          <StatRow
            stats={[
              { value: "01", label: "Shorten onboarding — remove unnecessary setup steps" },
              { value: "02", label: "Guide first success — create a focused activation path" },
              { value: "03", label: "Measure value reached — track it as a leading indicator" },
            ]}
          />
        </PresentationSlide>

        <PresentationSlide slideNumber="07" eyebrow="The Growth Engine" variant="closing"
          title="Growth is not the problem. The next phase depends on making more customers successful sooner."
          subtitle="Decision: prioritize activation before increasing acquisition spend." />
      </CaseStudyLayout>
    </div>
  );
}
