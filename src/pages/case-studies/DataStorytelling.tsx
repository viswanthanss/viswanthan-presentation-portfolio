import CaseStudyLayout from "../../components/CaseStudyLayout";
import PresentationSlide from "../../components/PresentationSlide";
import StatRow from "../../components/charts/StatRow";
import BarChart from "../../components/charts/BarChart";
import Funnel from "../../components/charts/Funnel";
import DualTrendTrack from "../../components/charts/DualTrendTrack";
import { growthTheme } from "../../theme";
import { getProjectBySlug } from "../../data/projects";
import { useReveal } from "../../hooks/useReveal";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const acquisitionIndex = [100, 108, 116, 126, 137, 149, 164, 181, 197, 207, 224, 243];
const retentionRatePct = [74, 71, 69, 66, 63, 61, 58, 55, 53, 50, 48, 45];

export default function DataStorytelling() {
  const project = getProjectBySlug("data-storytelling")!;
  const ref = useReveal<HTMLDivElement>();
  return <div ref={ref}>
    <CaseStudyLayout project={project} meta={{ role: "Data analysis framing, narrative, visual design", brief: "Self-initiated", audience: "Leadership / board review", scope: "7-slide business review", output: "Data storytelling deck", status: "Self-initiated concept · Synthetic cohort data" }}
      thesis="A subscription business with strong acquisition growth and a quietly declining retention rate — read correctly only once the two are separated."
      problem={<>The raw numbers look like a growth story: new customers are up sharply and revenue is up. Retention is moving the other direction, but a shared-axis chart makes that decline visually insignificant. Acquisition volume and retention rate are different units, so the visual needs to separate them.</>}
      designDecision={<>Give acquisition and retention their own tracks instead of one shared axis. Acquisition is indexed to a baseline; retention remains an actual rate. They share a timeline without implying a shared numeric scale.</>}
      narrativeStrategy={<>Data → insight → decision, narrowing from the headline tension to the corrected trend, the weakest segment, the funnel break, and one activation recommendation.</>}
      visualSystem={<>Warm, paper-toned, editorial and data-journalism inspired. Each chart carries one explicit takeaway so the argument does not depend on close reading of axes.</>}
      keyDecisions={["Replaced the shared-axis overlay with two independently scaled tracks.", "Corrected the headline acquisition stat from +31% to +143%, matching Jan 100 → Dec 243.", "Removed the unsupported claim that SMB brings the most new logos.", "Reframed the week-one-value relationship as correlation rather than causation."]}
      outcome={["Moved retention to its own visual track as the central argument.", "Removed a headline number that contradicted its supporting chart.", "Removed an unsupported segment-acquisition claim.", "No client outcomes claimed — all cohort figures are synthetic."]}>
      <PresentationSlide theme={growthTheme} slideNumber="01" eyebrow="The headline" variant="metrics" title="Acquisition is up sharply. The retention rate is quietly moving the other way." tag="Synthetic cohort data">
        <StatRow label="New customer acquisition index is up 143 percent, revenue is up 24 percent, and 90-day retention is down 8 points." stats={[{ value: "+143%", label: "New customer acquisition (indexed)" }, { value: "+24%", label: "Revenue" }, { value: "−8 pts", label: "90-day retention rate" }]} />
      </PresentationSlide>
      <PresentationSlide theme={growthTheme} slideNumber="02" eyebrow="The divergence" variant="chart" title="Acquisition is accelerating. The retention rate is declining." tag="Illustrative, indexed data" footnote="Acquisition is indexed to January = 100; retention is an actual percentage. The tracks share a timeline, not a numeric scale.">
        <DualTrendTrack label="Acquisition rises from 100 to 243 while 90-day retention falls from 74 percent to 45 percent." firstCategory="Jan" lastCategory="Dec" tracks={[{ title: "Acquisition index", unit: "Indexed, Jan = 100", categories: months, values: acquisitionIndex, format: (v) => `${v}`, color: growthTheme.accent! }, { title: "90-day retention", unit: "% of cohort retained", categories: months, values: retentionRatePct, format: (v) => `${v}%`, color: growthTheme.off! }]} annotation="Two different units move in opposite directions: acquisition index more than doubles while retention falls 29 points." />
      </PresentationSlide>
      <PresentationSlide theme={growthTheme} slideNumber="03" eyebrow="Where it concentrates" variant="chart" title="SMB retains customers at the lowest rate of any segment." tag="Illustrative cohort data">
        <BarChart label="90-day retention by segment: SMB 54 percent, mid-market 71 percent, enterprise 84 percent." bars={[{ label: "SMB", value: 54, display: "54%", highlight: true }, { label: "Mid-market", value: 71, display: "71%" }, { label: "Enterprise", value: 84, display: "84%" }]} max={100} insight="This chart shows retention rate by segment only — it does not establish which segment brings the most new customers." />
      </PresentationSlide>
      <PresentationSlide theme={growthTheme} slideNumber="04" eyebrow="Where it breaks" variant="chart" title="The funnel breaks after activation, not at sign-up." tag="Illustrative funnel">
        <Funnel label="Sign-up to activation to first value to week-four active to 90-day retained." stages={[{ label: "Sign-up", value: 100 }, { label: "Activated", value: 72 }, { label: "First value achieved", value: 51, highlightDrop: true }, { label: "Week-4 active", value: 38 }, { label: "90-day retained", value: 29 }]} note="The largest single drop happens between activation and first value." />
      </PresentationSlide>
      <PresentationSlide theme={growthTheme} slideNumber="05" eyebrow="The lever" variant="chart" title="Customers reaching value within 7 days show 2.4× the retention rate in this illustrative cohort." tag="Correlation, not a causal claim">
        <BarChart label="90-day retention by time-to-value." bars={[{ label: "Time-to-value < 7 days", value: 72, display: "72%", highlight: true }, { label: "7–14 days", value: 58, display: "58%" }, { label: "15–30 days", value: 41, display: "41%" }, { label: "30+ days", value: 30, display: "30%" }]} max={100} />
      </PresentationSlide>
      <PresentationSlide theme={growthTheme} slideNumber="06" eyebrow="The recommendation" variant="metrics" title="The highest-leverage move isn't more acquisition. It's faster time-to-value.">
        <StatRow label="Three recommendations: shorten onboarding, guide customers to first success faster, and measure time-to-value." stats={[{ value: "01", label: "Shorten onboarding" }, { value: "02", label: "Guide first success" }, { value: "03", label: "Measure value reached" }]} />
      </PresentationSlide>
      <PresentationSlide theme={growthTheme} slideNumber="07" eyebrow="The Growth Engine" variant="closing" title="Growth isn't the problem. The next phase depends on making more customers successful sooner." subtitle="Decision: prioritize activation before increasing acquisition spend." />
    </CaseStudyLayout>
  </div>;
}
