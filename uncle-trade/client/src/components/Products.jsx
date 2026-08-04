// Structure borrowed from the reference site: each commodity group gets its
// own horizontally-scrolling row of specific origins/varieties, not just a
// flat list. Buyers searching "Yirgacheffe" or "Humera sesame" recognize the
// name immediately — that specificity is doing real work.
const CATEGORIES = [
  {
    id: "coffee",
    name: "Coffee",
    intro:
      "Organic Arabica, sourced by origin. Ethiopia grows most of its coffee without synthetic inputs.",
    items: [
      { title: "Yirgacheffe", blurb: "Washed, fruit-forward, floral. From southern Ethiopia — widely regarded as the country's signature origin." },
      { title: "Sidamo", blurb: "Rich body, bright and consistent aftertaste year to year." },
      { title: "Guji", blurb: "Fruit-forward cup from the acidic soils of southern Oromia." },
      { title: "Djimmah", blurb: "Low-acid, grown across the Illubabor and Kaffa highlands." },
      { title: "Limmu", blurb: "Sweet, spicy, well-balanced body from the south-west highlands." },
      { title: "Lekempti", blurb: "Smooth acidity with delicate fruit notes, from Welega's forest-grown lots." },
    ],
  },
  {
    id: "sesame",
    name: "Sesame seed",
    intro: "Whitish and mixed-colour varieties for the edible oil and food export markets.",
    items: [
      { title: "Humera (whitish)", blurb: "Premium variety native to the Humera district — the most in-demand grade internationally." },
      { title: "Wollega (mixed)", blurb: "Brownish mixed variety with high oil content, strong for edible-oil processing." },
      { title: "Hulled Humera", blurb: "Outer shell removed during processing — ready for direct food use." },
      { title: "Tahini", blurb: "Ground toasted sesame paste, processed in-house on request." },
    ],
  },
  {
    id: "pulses",
    name: "Pulses",
    intro: "A core crop for Ethiopian smallholder farmers, exported in several varieties.",
    items: [
      { title: "Red kidney bean", blurb: "Sourced from Gojam and southern Ethiopia." },
      { title: "White beans", blurb: "High in dietary fibre, sold as a meat alternative in several markets." },
      { title: "Red speckled kidney bean", blurb: "Large, kidney-shaped, nutrient-dense." },
      { title: "Chickpeas", blurb: "Desi and Kabuli varieties available depending on order." },
      { title: "Green mung bean", blurb: "A newer crop in Ethiopia with strong early results." },
      { title: "Black kidney bean", blurb: "Antioxidant-rich, growing export demand." },
    ],
  },
  {
    id: "soybean",
    name: "Soybean",
    intro: "Yellow soybean for crushing and feed markets.",
    items: [
      { title: "Yellow soybean", blurb: "Sourced from western Ethiopia, sold by contracted volume." },
    ],
  },
];

function Row({ cat }) {
  return (
    <div className="cat">
      <div className="cat__head">
        <h3>{cat.name}</h3>
        <p>{cat.intro}</p>
      </div>
      <div className="cat__scroll">
        {cat.items.map((item) => (
          <div className="cat__card" key={item.title}>
            <div className="cat__img" aria-hidden="true" />
            <h4>{item.title}</h4>
            <p>{item.blurb}</p>
            <a href="#contact" className="cat__link">
              Ask about this →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="section products">
      <div className="container">
        <p className="eyebrow">What we export</p>
        <h2>Coffee and grain, by origin and grade.</h2>
        <p className="lede">
          Swipe a row to see varieties. Current availability changes by
          season — get in touch for what's on hand now.
        </p>
      </div>

      <div className="container products__rows">
        {CATEGORIES.map((cat) => (
          <Row cat={cat} key={cat.id} />
        ))}
      </div>

      <style>{`
        .products__rows { display: flex; flex-direction: column; gap: 44px; margin-top: 32px; }
        .cat__head { max-width: 640px; margin-bottom: 16px; }
        .cat__head h3 { font-size: 22px; margin-bottom: 6px; }
        .cat__head p { color: var(--muted); font-size: 14.5px; margin: 0; }
        .cat__scroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding-bottom: 8px;
          margin: 0 -20px;
          padding-left: 20px;
          padding-right: 20px;
        }
        .cat__card {
          flex: 0 0 240px;
          scroll-snap-align: start;
          background: #fff;
          border: 1px solid var(--line-dark);
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .cat__img {
          height: 120px;
          background: linear-gradient(135deg, var(--brass), var(--green));
          opacity: 0.85;
          /* Replace with a real photo of this origin/variety */
        }
        .cat__card h4 { font-size: 16px; margin: 14px 14px 6px; }
        .cat__card p { font-size: 13.5px; color: var(--muted); margin: 0 14px; flex: 1; }
        .cat__link {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--green);
          text-decoration: none;
          margin: 12px 14px 14px;
        }
      `}</style>
    </section>
  );
}
