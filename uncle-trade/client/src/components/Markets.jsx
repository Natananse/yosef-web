const MARKETS = [
  "Germany", "Belgium", "Saudi Arabia", "UAE", "China", "USA", "Japan", "Sudan",
];

export default function Markets() {
  return (
    <section id="markets" className="section section--dark markets">
      <div className="container markets__row">
        <div>
          <p className="eyebrow">Where it goes</p>
          <h2>Shipping to buyers across [8] countries.</h2>
          <p className="lede" style={{ color: "var(--muted)" }}>
            From Ethiopia's highlands to ports and cities worldwide — coffee, sesame, and pulses shipped on schedule, with full traceability from origin to delivery.
          </p>
        </div>
        <ul className="markets__list">
          {MARKETS.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>

      <style>{`
        .markets__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .markets__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 14px;
        }
        .markets__list li {
          border-bottom: 1px solid var(--line);
          padding-bottom: 10px;
          color: var(--cream);
        }
        @media (max-width: 780px) {
          .markets__row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
