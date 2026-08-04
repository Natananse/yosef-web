import { useState } from "react";

const LINKS = [
  { href: "#about", label: "Company" },
  { href: "#products", label: "Export" },
  { href: "#import", label: "Import" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__row">
        <a href="#top" className="nav__mark">
          [Yosef Belay] <span>Export</span>
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary nav__cta">
            Request a quote
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(34, 22, 9, 0.92);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--line);
        }
        .nav__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .nav__mark {
          font-family: var(--font-display);
          color: var(--cream);
          font-weight: 600;
          font-size: 18px;
          text-decoration: none;
        }
        .nav__mark span {
          color: var(--brass);
        }
        .nav__links {
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .nav__links a {
          color: var(--cream);
          text-decoration: none;
          font-size: 14.5px;
        }
        .nav__cta {
          padding: 9px 18px;
          font-size: 14px;
        }
        .nav__toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .nav__toggle span {
          width: 22px;
          height: 2px;
          background: var(--cream);
        }
        @media (max-width: 780px) {
          .nav__toggle { display: flex; }
          .nav__links {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            background: var(--bg-dark);
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
            padding: 20px;
            border-bottom: 1px solid var(--line);
            display: none;
          }
          .nav__links.is-open { display: flex; }
          .nav__cta { width: 100%; justify-content: center; }
        }
      `}</style>
    </header>
  );
}
