import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: "var(--space-8) 0", textAlign: "center" }}>
      <h1 style={{ fontSize: "clamp(40px, 8vw, 80px)" }}>404</h1>
      <p style={{ marginTop: 16, color: "var(--text-secondary)" }}>
        This page doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 32, display: "inline-flex" }}>
        Back home
      </Link>
    </div>
  );
}
