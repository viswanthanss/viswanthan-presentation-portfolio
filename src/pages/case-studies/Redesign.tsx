import { getProjectBySlug } from "../../data/projects";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import PresentationSlide from "../../components/PresentationSlide";
import StatRow from "../../components/charts/StatRow";
import Matrix2x2 from "../../components/charts/Matrix2x2";
import Funnel from "../../components/charts/Funnel";
import BeforeMock, { BeforeCard, BeforeArrowStep } from "../../components/BeforeMock";
import { useReveal } from "../../hooks/useReveal";
import "./Redesign.css";

export default function Redesign() {
  const project = getProjectBySlug("redesign")!;
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <CaseStudyLayout
        project={project}
        thesis="Three slides built to look like common, well-intentioned corporate default — then rebuilt around a single point of view."
        challenge="Each 'before' slide is technically correct and visually tidy. The problem is judgment: everything carries equal weight, so the reviewer has to do the prioritizing the designer should have done."
        approach="For each pair, the fix is the same move: find the one relationship in the data that matters, and let the layout argue for it instead of listing every fact at the same size."
        outcome="Demonstrates editorial judgment — the ability to look at a competent but flat slide and identify exactly what to cut, reweight, or reframe."
      >
        <section className="redesign-pair" data-reveal>
          <p className="eyebrow redesign-pair-label">Redesign 01 — Q3 business performance</p>
          <div className="redesign-grid">
            <div>
              <span className="redesign-tag">Before</span>
              <BeforeMock title="Q3 Business Performance">
                <BeforeCard label="Revenue" value="+24%" />
                <BeforeCard label="Customer growth" value="+31%" />
                <BeforeCard label="Retention" value="−8%" />
                <BeforeCard label="Gross margin" value="+4%" />
              </BeforeMock>
            </div>
            <div>
              <span className="redesign-tag redesign-tag--accent">After</span>
              <PresentationSlide
                variant="metrics"
                eyebrow="Q3 review"
                title="Growth is accelerating, but retention is becoming the constraint."
                footnote="Growth is being purchased faster than it is being retained."
              >
                <StatRow
                  stats={[
                    { value: "+31%", label: "Customer growth" },
                    { value: "+24%", label: "Revenue" },
                    { value: "−8 pts", label: "90-day retention" },
                  ]}
                />
              </PresentationSlide>
            </div>
          </div>
          <p className="redesign-note">
            The before-slide gives four metrics identical visual weight, so the
            tension between acquisition and retention disappears. The after-slide
            keeps the same three numbers but reorders and labels them so the
            relationship — not just the data — is what the reader sees first.
          </p>
        </section>

        <section className="redesign-pair" data-reveal>
          <p className="eyebrow redesign-pair-label">Redesign 02 — Strategic priorities</p>
          <div className="redesign-grid">
            <div>
              <span className="redesign-tag">Before</span>
              <BeforeMock title="Strategic Priorities">
                <BeforeCard label="Priority 1" value="Improve product" />
                <BeforeCard label="Priority 2" value="Expand sales" />
                <BeforeCard label="Priority 3" value="Improve marketing" />
                <BeforeCard label="Priority 4" value="Enter new markets" />
              </BeforeMock>
            </div>
            <div>
              <span className="redesign-tag redesign-tag--accent">After</span>
              <PresentationSlide
                variant="matrix"
                eyebrow="Prioritization"
                title="Four initiatives. Two deserve disproportionate investment."
                footnote="Prioritization turns a list into a decision."
              >
                <Matrix2x2
                  xLabel="Execution confidence"
                  yLabel="Impact"
                  xLowHigh={["Low", "High"]}
                  yLowHigh={["Low", "High"]}
                  points={[
                    { label: "Core workflow expansion", x: 82, y: 85, highlight: true },
                    { label: "Activation improvements", x: 78, y: 80, highlight: true },
                    { label: "Adjacent market", x: 48, y: 50 },
                    { label: "New category", x: 20, y: 25 },
                  ]}
                />
              </PresentationSlide>
            </div>
          </div>
          <p className="redesign-note">
            Four identical boxes describe a list, not a decision. Plotting the
            same four items on impact versus execution confidence turns the
            slide into an argument for where to concentrate resources.
          </p>
        </section>

        <section className="redesign-pair" data-reveal>
          <p className="eyebrow redesign-pair-label">Redesign 03 — Customer journey</p>
          <div className="redesign-grid">
            <div>
              <span className="redesign-tag">Before</span>
              <BeforeMock title="Customer Journey">
                <BeforeArrowStep label="Awareness" />
                <BeforeArrowStep label="Consideration" />
                <BeforeArrowStep label="Purchase" />
                <BeforeArrowStep label="Onboarding" />
                <BeforeArrowStep label="Usage" />
                <BeforeArrowStep label="Retention" />
              </BeforeMock>
            </div>
            <div>
              <span className="redesign-tag redesign-tag--accent">After</span>
              <PresentationSlide
                variant="chart"
                eyebrow="Customer journey"
                title="The drop happens before customers reach first value."
                footnote="Focus the design intervention where behavior changes."
              >
                <Funnel
                  stages={[
                    { label: "Sign-up", value: 100 },
                    { label: "Activated", value: 72 },
                    { label: "First value", value: 51, highlightDrop: true },
                    { label: "Week-4 active", value: 38 },
                    { label: "90-day retained", value: 29 },
                  ]}
                />
              </PresentationSlide>
            </div>
          </div>
          <p className="redesign-note">
            A journey map with six identical arrows describes a process without
            locating the problem inside it. A funnel with real proportions shows
            exactly where the business is losing people.
          </p>
        </section>
      </CaseStudyLayout>
    </div>
  );
}
