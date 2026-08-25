import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-inner wrap">
        <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-brand-name">Viswanthan S S</span>
          <span className="nav-brand-role">Presentation Designer</span>
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/work" className="nav-link">
            Work
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile ${open ? "is-open" : ""}`}>
        <NavLink to="/work" onClick={() => setOpen(false)}>
          Work
        </NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>
          About
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
      </div>
    </header>
  );
}
