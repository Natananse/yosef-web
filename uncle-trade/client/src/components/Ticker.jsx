// Phase 1: static demo figures, clearly labeled as indicative.
// Phase 3: replace ITEMS with a fetch to a real ECX daily price feed.
const ITEMS = [
  { code: "COF-YIRG-G1", label: "Yirgacheffe Grade 1", price: "312.40", unit: "USD/qtl" },
  { code: "COF-SIDA-G2", label: "Sidama Grade 2", price: "268.10", unit: "USD/qtl" },
  { code: "SES-WHIT-99", label: "Whitish Sesame 99%", price: "1,180", unit: "USD/ton" },
  { code: "MAI-WHIT-01", label: "White Maize", price: "285", unit: "USD/ton" },
  { code: "HAR-WHIT-01", label: "Haricot Bean, White", price: "640", unit: "USD/ton" },
];

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="ticker" aria-label="Indicative commodity prices">
      <div className="ticker__track">
        {row.map((item, i) => (
          <span className="ticker__item" key={i}>
            <b>{item.code}</b>
            <span className="ticker__label">{item.label}</span>
            <span className="ticker__price">
              {item.price} <em>{item.unit}</em>
            </span>
          </span>
        ))}
      </div>
      <p className="ticker__note">
        Indicative prices, updated periodically — not a live ECX feed.
      </p>

      <style>{`
        .ticker {
          background: var(--bg-dark-2);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          overflow: hidden;
          padding: 12px 0 6px;
        }
        .ticker__track {
          display: flex;
          gap: 40px;
          width: max-content;
          animation: ticker-scroll 32s linear infinite;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--cream);
        }
        .ticker__item {
          display: inline-flex;
          align-items: baseline;
          gap: 10px;
          white-space: nowrap;
        }
        .ticker__item b { color: var(--brass); }
        .ticker__label { color: var(--muted); }
        .ticker__price em { color: var(--muted); font-style: normal; font-size: 11px; }
        .ticker__note {
          text-align: center;
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--muted);
          margin: 8px 0 0;
        }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker__track { animation: none; overflow-x: auto; }
        }
      `}</style>
    </div>
  );
}
