import { ReactNode, CSSProperties } from "react";
import "./PresentationSlide.css";

export type SlideVariant = "hero" | "metrics" | "chart" | "comparison" | "diagram" | "timeline" | "matrix" | "dashboard" | "closing" | "beforeAfter";
export type SlideTheme = { bg: string; fg: string; title: string; muted: string; muted2: string; faint: string; accent: string; accentInk: string; border: string; grid: string; off: string; dim: string };

type Props = { slideNumber?: string; eyebrow?: string; title: ReactNode; subtitle?: ReactNode; variant: SlideVariant; footnote?: string; tag?: string; theme?: SlideTheme; children?: ReactNode };

export default function PresentationSlide({ slideNumber, eyebrow, title, subtitle, variant, footnote, tag, theme, children }: Props) {
  const style = theme ? ({ "--slide-bg": theme.bg, "--slide-fg": theme.fg, "--slide-title": theme.title, "--slide-muted": theme.muted, "--slide-muted2": theme.muted2, "--slide-faint": theme.faint, "--slide-accent": theme.accent, "--slide-accent-ink": theme.accentInk, "--slide-border": theme.border, "--slide-grid": theme.grid, "--slide-off": theme.off, "--slide-dim": theme.dim } as CSSProperties) : undefined;
  return <div className={`slide slide--${variant}`} data-reveal style={style}>
    <div className="slide-frame">
      <div className="slide-top">{eyebrow && <span className="slide-eyebrow">{eyebrow}</span>}{slideNumber && <span className="slide-number">{slideNumber}</span>}</div>
      <div className="slide-head"><h3 className="slide-title">{title}</h3>{subtitle && <p className="slide-subtitle">{subtitle}</p>}{tag && <span className="label-chip">{tag}</span>}</div>
      {children && <div className="slide-body">{children}</div>}
      {footnote && <p className="slide-footnote">{footnote}</p>}
    </div>
  </div>;
}
