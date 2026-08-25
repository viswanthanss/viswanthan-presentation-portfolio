import { ReactNode } from "react";
import "./PresentationSlide.css";

export type SlideVariant =
  | "hero"
  | "metrics"
  | "chart"
  | "comparison"
  | "diagram"
  | "timeline"
  | "matrix"
  | "dashboard"
  | "closing"
  | "beforeAfter";

type Props = {
  slideNumber?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  variant: SlideVariant;
  footnote?: string;
  children?: ReactNode;
};

export default function PresentationSlide({
  slideNumber,
  eyebrow,
  title,
  subtitle,
  variant,
  footnote,
  children,
}: Props) {
  return (
    <div className={`slide slide--${variant}`} data-reveal>
      <div className="slide-frame">
        <div className="slide-top">
          {eyebrow && <span className="slide-eyebrow">{eyebrow}</span>}
          {slideNumber && <span className="slide-number">{slideNumber}</span>}
        </div>

        <div className="slide-head">
          <h3 className="slide-title">{title}</h3>
          {subtitle && <p className="slide-subtitle">{subtitle}</p>}
        </div>

        {children && <div className="slide-body">{children}</div>}

        {footnote && <p className="slide-footnote">{footnote}</p>}
      </div>
    </div>
  );
}
