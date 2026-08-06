// Structure borrowed from the reference site: each commodity group gets its
// own horizontally-scrolling row of specific origins/varieties, not just a
// flat list. Buyers searching "Yirgacheffe" or "Humera sesame" recognize the
// name immediately — that specificity is doing real work.
import r1 from '../image/r1.png';
import r2 from '../image/r2.png';
import r3 from '../image/r3.png';
import r4 from '../image/r4.png';
import r5 from '../image/r5.png';
import r6 from '../image/r6.png';
import r7 from '../image/r7.png';
import r8 from '../image/r8.png';
import r9 from '../image/r9.png';
import r10 from '../image/r10.png';
import r11 from '../image/r11.png';
import r12 from '../image/r12.png';
import r13 from '../image/r13.png';
import r14 from '../image/r14.png';
import r15 from '../image/r15.png';
import r16 from '../image/r16.png';
import r17 from '../image/r17.png';
const CATEGORIES = [
  {
    id: "coffee",
    name: "Coffee",
    intro: "Organic Arabica, sourced by origin. Ethiopia grows most of its coffee without synthetic inputs.",
    items: [
      { title: "Yirgacheffe", blurb: "Washed, fruit-forward, floral. From southern Ethiopia — widely regarded as the country's signature origin.", image: r1 },
      { title: "Sidamo", blurb: "Rich body, bright and consistent aftertaste year to year.", image: r2 },
      { title: "Guji", blurb: "Fruit-forward cup from the acidic soils of southern Oromia.", image: r3 },
      { title: "Djimmah", blurb: "Low-acid, grown across the Illubabor and Kaffa highlands.", image: r4 },
      { title: "Limmu", blurb: "Sweet, spicy, well-balanced body from the south-west highlands.", image: r5 },
      { title: "Lekempti", blurb: "Smooth acidity with delicate fruit notes, from Welega's forest-grown lots.", image: r6 },
    ],
  },
  {
    id: "sesame",
    name: "Sesame seed",
    intro: "Whitish and mixed-colour varieties for the edible oil and food export markets.",
    items: [
      { title: "Humera (whitish)", blurb: "Premium variety native to the Humera district — the most in-demand grade internationally.", image: r7 },
      { title: "Wollega (mixed)", blurb: "Brownish mixed variety with high oil content, strong for edible-oil processing.", image: r8 },
      { title: "Hulled Humera", blurb: "Outer shell removed during processing — ready for direct food use.", image: r9 },
      { title: "Tahini", blurb: "Ground toasted sesame paste, processed in-house on request.", image: r10 },
    ],
  },
  {
    id: "pulses",
    name: "Pulses",
    intro: "A core crop for Ethiopian smallholder farmers, exported in several varieties.",
    items: [
      { title: "Red kidney bean", blurb: "Sourced from Gojam and southern Ethiopia.", image: r11 },
      { title: "White beans", blurb: "High in dietary fibre, sold as a meat alternative in several markets.", image: r12 },
      { title: "Red speckled kidney bean", blurb: "Large, kidney-shaped, nutrient-dense.", image: r13 },
      { title: "Chickpeas", blurb: "Desi and Kabuli varieties available depending on order.", image: r14 },
      { title: "Green mung bean", blurb: "A newer crop in Ethiopia with strong early results.", image: r16 },
      { title: "Black kidney bean", blurb: "Antioxidant-rich, growing export demand.", image: r15 },
    ],
  },
  {
    id: "soybean",
    name: "Soybean",
    intro: "Yellow soybean for crushing and feed markets.",
    items: [
      { title: "Yellow soybean", blurb: "Sourced from western Ethiopia, sold by contracted volume.", image: r17 },
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
            <img src={item.image} alt={item.title} className="cat__img" />
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
         width: 100%;
         object-fit: cover;
         display: block;
        }
          /* Replace with a real photo of this origin/variety */
        
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
