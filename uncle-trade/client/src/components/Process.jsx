const STEPS = [
  {
    n: "01",
    title: "Sourcing",
    body: "Bought directly from farmers and cooperatives, or through the ECX auction floor, depending on the commodity.",
  },
  {
    n: "02",
    title: "Grading & processing",
    body: "Cupping, moisture testing, and grading to export standard at our facility before anything is packed.",
  },
  {
    n: "03",
    title: "Documentation",
    body: "Certificate of origin, phytosanitary certificate, and export permit prepared and filed with the relevant authorities.",
  },
  {
    n: "04",
    title: "Shipment",
    body: "Packed, containerized, and shipped from Djibouti or Addis Ababa Bole, with tracking shared with the buyer.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section section--dark process">
      <div className="container">
        <p className="eyebrow">How an order moves</p>
        <h2>Farm to freight, in four steps.</h2>

        <ol className="process__list">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="process__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .process__list {
          list-style: none;
          margin: 40px 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        .process__list li {
          border-top: 1px solid var(--line);
          padding-top: 18px;
        }
        .process__n {
          font-family: var(--font-mono);
          color: var(--brass);
          font-size: 13px;
        }
        .process__list h3 {
          color: var(--cream);
          font-size: 19px;
          margin: 10px 0 8px;
        }
        .process__list p {
          color: var(--muted);
          font-size: 14.5px;
        }
        @media (max-width: 900px) {
          .process__list { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .process__list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
