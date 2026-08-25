import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../config";
import "./Footer.css";

export default function Footer() {
  const links = Object.entries(SOCIAL_LINKS).filter(([, url]) => url);

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <h2 className="footer-headline">
            Let's put your ideas into a deck that gets a "yes."
          </h2>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>
            Get in touch
          </Link>
        </div>

        <div className="footer-meta">
          <div>
            <span className="eyebrow">Presentation Designer</span>
            <p>Viswanthan S S</p>
          </div>
          {links.length > 0 && (
            <div className="footer-links">
              {links.map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ))}
            </div>
          )}
          <p className="footer-copy">© {new Date().getFullYear()} Viswanthan S S</p>
        </div>
      </div>
    </footer>
  );
}
