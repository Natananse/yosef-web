import CoffeeIllustration from "./CoffeeIllustration.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero section section--dark">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">Addis Ababa · ECX-registered exporter</p>
          <h1 className="hero__title">
            From the highlands of Ethiopia
            <br /> to buyers around the world.
          </h1>
          <p className="hero__amharic">የታታሪዋ ኢትዮጵያ ተምሳሌት</p>
          <p className="lede">
            Yosef Belay import-export sources coffee and grain commodities directly
            from farmers, cooperatives, and the ECX floor, grades and
            processes them to export standard, and ships to importers across
            the globe.
          </p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">
              Request a quote
            </a>
            <a href="#process" className="btn btn--ghost">
              See how we work
            </a>
          </div>
        </div>

        <CoffeeIllustration />

        <dl className="hero__stats">
          <div>
            <dt>Years trading</dt>
            <dd>[8]+</dd>
          </div>
          <div>
            <dt>Commodities handled</dt>
            <dd>Coffee, sesame, maize, pulses</dd>
          </div>
          <div>
            <dt>Export markets</dt>
            <dd>[2010] countries</dd>
          </div>
        </dl>
      </div>

      <style>{`
        .hero { padding-top: clamp(48px, 8vw, 88px); }
        .hero__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.8fr 0.7fr;
          gap: 40px;
          align-items: center;
        }
        .hero__title {
          font-size: clamp(32px, 5vw, 54px);
          color: var(--cream);
          max-width: 14ch;
        }
        .hero__amharic {
          font-family: var(--font-amharic);
          color: var(--brass-bright);
          font-size: 16px;
          margin: 10px 0 18px;
        }
        .hero__cta {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          flex-wrap: wrap;
        }
        .hero__stats {
          display: flex;
          flex-direction: column;
          gap: 22px;
          border-left: 1px solid var(--line);
          padding-left: 24px;
          margin: 0;
        }
        .hero__stats dt {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          margin: 0 0 4px;
        }
        .hero__stats dd {
          margin: 0;
          font-family: var(--font-display);
          font-size: 20px;
          color: var(--cream);
        }
        @media (max-width: 780px) {
          .hero__grid { grid-template-columns: 1fr; }
          .coffee3d { max-width: 220px; }
          .hero__stats {
            border-left: none;
            border-top: 1px solid var(--line);
            padding-left: 0;
            padding-top: 20px;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}