import { CONTACT_EMAIL, SOCIAL_LINKS } from "../config";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const links = Object.entries(SOCIAL_LINKS).filter(([, url]) => url);
  const hasEmail = CONTACT_EMAIL && CONTACT_EMAIL !== "YOUR_EMAIL_HERE";

  return (
    <div
      ref={ref}
      className="wrap"
      style={{ paddingTop: "var(--space-6)", paddingBottom: "var(--space-8)", minHeight: "50vh" }}
    >
      <div style={{ maxWidth: "58ch" }} data-reveal>
        <span className="eyebrow">Contact</span>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", marginTop: 12 }}>
          Available for freelance presentation design projects.
        </h1>

        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
          {hasEmail ? (
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn btn-primary" style={{ width: "fit-content" }}>
              Get in touch
            </a>
          ) : (
            <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
              Reach out through the application you received this portfolio
              from, or add your email to <code>src/config.ts</code>.
            </p>
          )}

          {links.length > 0 && (
            <div style={{ display: "flex", gap: 20 }}>
              {links.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}
                >
                  {name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
