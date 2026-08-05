export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__figure" aria-hidden="true" />
        <div>
          <p className="eyebrow">Who we are</p>
          <h2>Built on relationships with growers, not just spreadsheets.</h2>
          <p className="lede">
            [Yosef Belay] founded [yosef belay import-export] in [2010] after
            [8 years] working in Ethiopia's coffee and grain trade. The
            business buys directly from farmers, cooperatives, and licensed
            suppliers, and through the Ethiopia Commodity Exchange, then
            manages grading, processing, and export logistics end to end.
          </p>
          <p>
            Every shipment carries full traceability back to origin —
            something buyers increasingly ask for and something this
            business has always kept records for.
          </p>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 48px;
          align-items: center;
        }
        .about__figure {
          aspect-ratio: 4 / 5;
          background: linear-gradient(145deg, var(--green), var(--bg-dark));
          border-radius: 4px;
          /* Replace with an actual photo of [Uncle's Name] or the warehouse/farm */
        }
        @media (max-width: 780px) {
          .about__grid { grid-template-columns: 1fr; }
          .about__figure { aspect-ratio: 16/10; }
        }
      `}</style>
    </section>
  );
}
