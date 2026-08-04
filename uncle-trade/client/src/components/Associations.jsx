const MEMBERSHIPS = [
  "Addis Ababa Chamber of Commerce",
  "Ethiopian Chamber of Commerce & Sectoral Associations",
  "Ethiopian Pulses, Oilseeds & Spices Processors Association",
  "Ethiopian Coffee Exporters Association",
];

export default function Associations() {
  return (
    <div className="assoc">
      <div className="container">
        <p className="assoc__label">Member of</p>
        <ul className="assoc__list">
          {MEMBERSHIPS.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>

      <style>{`
        .assoc { padding: 32px 0; background: var(--bg-light); border-top: 1px solid var(--line-dark); }
        .assoc__label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          margin: 0 0 14px;
        }
        .assoc__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 10px 28px;
        }
        .assoc__list li {
          font-size: 13.5px;
          color: var(--ink);
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}
