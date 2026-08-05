// Replace every entry with [Uncle's Name]'s real recognitions. Even 2-3
// genuine ones (an ECX letter, a bank relationship, an association
// membership) do more for credibility than a long list of placeholders —
// don't pad this with items that aren't real.
const AWARDS = [
  { org: "[Abisnya]", title: "[Top exporter recognition]" },
  { org: "ECX", title: "[ Recognition letter / member since Year]" },
  { org: "[Chamber of Commerce]", title: "[e.g. Registered member since Year]" },
  { org: "[Customs authority]", title: "[e.g. Authorized Economic Operator status]" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <p className="eyebrow">Recognition</p>
        <h2>Track record that a buyer can verify.</h2>

        <div className="achievements__grid">
          {AWARDS.map((a) => (
            <div className="achievements__card" key={a.org + a.title}>
              <span className="achievements__org">{a.org}</span>
              <p>{a.title}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .achievements__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 32px;
        }
        .achievements__card {
          border: 1px solid var(--line-dark);
          border-radius: 4px;
          padding: 20px;
          background: var(--bg-light);
        }
        .achievements__org {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--green);
        }
        .achievements__card p {
          margin: 8px 0 0;
          font-size: 14.5px;
        }
        @media (max-width: 900px) {
          .achievements__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .achievements__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
