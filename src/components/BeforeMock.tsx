import { ReactNode } from "react";
import "./BeforeMock.css";

export default function BeforeMock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="before-mock">
      <p className="before-mock-title">{title}</p>
      <div className="before-mock-body">{children}</div>
    </div>
  );
}

export function BeforeCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="before-card">
      <p className="before-card-value">{value}</p>
      <p className="before-card-label">{label}</p>
    </div>
  );
}

export function BeforeArrowStep({ label }: { label: string }) {
  return (
    <div className="before-arrow-step">
      <span>{label}</span>
    </div>
  );
}
