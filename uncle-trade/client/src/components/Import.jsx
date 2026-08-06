import oil from "../image/oil.png";
import Vehicles from "../image/Vehicles.png";
import tyre from "../image/tyre.png";
import Agrochemicals from "../image/Agrochemicals.png";
import Steel from "../image/Steel.png";
const IMPORTS = [
  {
    title: "Edible oil",
    image: oil,
    blurb: "Palm oil and sunflower oil, brought in by the container for the domestic market."
  },
  {
    title: "Vehicles",
    image: Vehicles,
    blurb: "Heavy-duty truck inputs and assembly components."
  },
  {
    title: "Tyres",
    image: tyre,
    blurb: "Truck tyres from established international brands, sourced to order."
  },
  {
    title: "Agro chemicals",
    image: Agrochemicals,
    blurb: "Pesticides, herbicides and fertilisers for the domestic agricultural market."
  },
  {
    title: "Steel bar",
    image: Steel,
    blurb: "Construction-grade steel bar in a range of sizes, mainly sourced from Turkey."
  }
];

export default function Import() {
  return (
    <section id="import" className="section section--dark import">
      <div className="container">
        <p className="eyebrow">What we import</p>
        <h2>Bringing goods in, not just sending them out.</h2>
        <p className="lede" style={{ color: "var(--muted)" }}>
          Alongside exports, [Yosef Belay import-export] imports goods the domestic
          market needs, from edible oils to truck tyres. The business has long-standing
          relationships with international suppliers and freight forwarders, and can
          source to order.
        </p>

        <div className="import__grid">
          {IMPORTS.map((item) => (
            <div className="import__card" key={item.title}>
              <img src={item.image} alt={item.title} className="import__img" />
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
          .import__img {
           width: 100%;
           height: 120px;
           object-fit: cover;
           border-radius: 4px;
           margin-bottom: 12px;
           display: block;
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
