const IMPORTS = [
  { title: "Edible oil", blurb: "Palm oil and sunflower oil, brought in by the container for the domestic market." },
  { title: "Vehicles", blurb: "Heavy-duty truck inputs and assembly components." },
  { title: "Tyres", blurb: "Truck tyres from established international brands, sourced to order." },
  { title: "Agro chemicals", blurb: "Pesticides, herbicides, and fertilisers for the domestic agricultural market." },
  { title: "Steel bar", blurb: "Construction-grade steel bar in a range of sizes, mainly sourced from Turkey." },
];

export default function Import() {
  return (
    <section id="import" className="section section--dark import">
      <div className="container">
        <p className="eyebrow">What we import</p>
        <h2>Bringing goods in, not just sending them out.</h2>
        <p className="lede" style={{ color: "var(--muted)" }}>
          Alongside exports, [Your Company Name] imports goods the domestic
          market needs — edited to match what your uncle actually imports.
        </p>

        <div className="import__grid">
          {IMPORTS.map((item) => (
            <div className="import__card" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.blurb}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .import__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 32px;
        }
        .import__card {
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 20px;
        }
        .import__card h4 {
          font-family: var(--font-display);
          color: var(--cream);
          font-size: 18px;
          margin: 0 0 8px;
        }
        .import__card p {
          color: var(--muted);
          font-size: 14px;
          margin: 0;
        }
        @media (max-width: 900px) {
          .import__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .import__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
