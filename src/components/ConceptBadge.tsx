import "./ConceptBadge.css";

export default function ConceptBadge({ label }: { label: string }) {
  return <span className="concept-badge">{label}</span>;
}
