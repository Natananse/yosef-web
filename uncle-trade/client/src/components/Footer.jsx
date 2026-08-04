export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__row">
        <p>© {new Date().getFullYear()} [Your Company Name]. Addis Ababa, Ethiopia.</p>
        <p className="footer__reg">ECX Member No. [XXXXX]</p>
      </div>

      <style>{`
        .footer {
          background: var(--bg-dark);
          color: var(--muted);
          border-top: 1px solid var(--line);
          padding: 20px 0;
          font-size: 13px;
        }
        .footer__row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer__reg { font-family: var(--font-mono); }
      `}</style>
    </footer>
  );
}
