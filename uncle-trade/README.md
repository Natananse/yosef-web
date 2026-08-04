# [Uncle's Company] — Coffee & Grain Export Portfolio

A mobile-first website for an Ethiopian import/export trader who sources
coffee and other ECX-traded commodities (sesame, maize, haricot beans, etc.)
from farmers and local suppliers, then sells into the global market.

Phase 1 (this build) is a **portfolio site**: it exists to make the business
look credible to a buyer who lands on it from a phone. Phase 2+ turns it into
a real SaaS as described in the roadmap below.

## Stack
- `client/` — React + Vite, plain CSS (no framework bloat, loads fast on
  Ethiopian mobile networks)
- `server/` — Node + Express, one endpoint today (contact form), built so
  new routes slot in cleanly later

## Run it locally

```bash
# Terminal 1 — backend
cd server
npm install
npm run dev        # http://localhost:4000

# Terminal 2 — frontend
cd client
npm install
npm run dev         # http://localhost:5173
```

The client calls the server at `http://localhost:4000/api/contact`. Change
`VITE_API_URL` in `client/.env` when you deploy (e.g. to your real domain).

## Sections (inspired by belaynehkindie.com, adapted for your uncle's scale)
- Hero — with an Amharic tagline alongside the English one
- Ticker — ECX-style scrolling price strip (Phase 3 will make it live)
- About — the founder's story
- Process — sourcing → grading → documentation → shipment
- **Export** — Coffee, Sesame, Pulses, Soybean, each as its own scrollable
  row of specific origins/varieties (Yirgacheffe, Humera sesame, etc.) —
  this level of detail is what buyers actually search for
- **Import** — mirrors the export section for whatever your uncle imports
  (edible oil, vehicles, tyres, agro chemicals, steel bar — edit to match)
- Markets — export destination countries
- **Achievements** — bank/ECX/chamber recognitions; only include real ones
- **Associations** — trade body memberships (chamber of commerce, coffee
  association, etc.) — a quiet but real trust signal
- Contact form + newsletter signup for price/availability updates

## Before you launch — replace these placeholders
- Company name, uncle's name/photo, phone number, email, physical address
  (search `[Your` in the `client/src/components` files)
- Coffee origins/grades and cereal commodities actually traded — trim the
  `Products.jsx` and `Import.jsx` lists to what's real, don't pad them
- Real export destination countries in `Markets.jsx`
- Real achievements/awards in `Achievements.jsx` — remove any that aren't
  genuine rather than leaving a placeholder in
- Real association memberships in `Associations.jsx`
- Logo (currently a text mark in `Nav.jsx`)

## The road map

**Phase 1 — Portfolio (now)**
Static-feeling site, fast on mobile, one contact form. Goal: anyone who gets
sent the link on WhatsApp trusts the business in 10 seconds.
- Hero, about, sourcing process, products, markets, contact
- Contact form → email/Telegram notification (see Phase 2)

**Phase 2 — Leads & content control (next)**
- Contact submissions saved to a database (Postgres) instead of just email,
  so nothing gets lost
- Simple admin page (password-protected) to edit products, prices shown,
  and testimonials without touching code
- WhatsApp/Telegram bot notification when a new inquiry comes in — this
  matters more than email for Ethiopian buyers

**Phase 3 — Live market data**
- Pull daily ECX indicative prices (coffee, sesame, maize, etc.) into the
  ticker component instead of static demo numbers
- Simple price-history chart per commodity
- Optional: daily price alert via Telegram to subscribed buyers

**Phase 4 — Real SaaS features (once the portfolio is proving itself)**
- Multi-tenant accounts: buyers can log in and see lot availability,
  documents, shipment status
- Inventory/lot tracking: warehouse, grade, quantity, moisture %, contract
  status
- Order & contract workflow: quote → contract → shipment → payment status
- Document generation: proforma invoice, certificate of origin templates

Build in that order. Phase 1 gets the business a credible face online now;
each later phase only makes sense once the one before it is actually being
used.
