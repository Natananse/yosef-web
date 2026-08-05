import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    commodity: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", phone: "", commodity: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Ask about pricing or availability.</h2>
          <p className="lede">
            Tell us what you need and roughly what volume — we'll reply with
            current pricing and lead time.
          </p>
          <ul className="contact__details">
            <li>[phone number, +251 911546502]</li>
            <li>[yosefbelay@gmail.com]</li>
            <li>[Physical address, Addis Ababa]</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <label>
            Name
            <input
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </label>
          <label>
            Phone (optional)
            <input
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </label>
          <label>
            Commodity of interest
            <input
              placeholder="e.g. Yirgacheffe coffee, sesame seed"
              value={form.commodity}
              onChange={(e) => update("commodity", e.target.value)}
            />
          </label>
          <label>
            Message
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
            />
          </label>

          <button className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send inquiry"}
          </button>

          {status === "sent" && (
            <p className="contact__status contact__status--ok">
              Received. We'll get back to you shortly.
            </p>
          )}
          {status === "error" && (
            <p className="contact__status contact__status--err">
              Something went wrong — try again, or reach us directly by
              phone.
            </p>
          )}
        </form>
      </div>

      <style>{`
        .contact__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
        }
        .contact__details {
          list-style: none;
          padding: 0;
          margin: 24px 0 0;
          font-family: var(--font-mono);
          font-size: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .contact__form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: #fff;
          border: 1px solid var(--line-dark);
          padding: 28px;
          border-radius: 4px;
        }
        .contact__form label {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 13.5px;
          color: var(--muted);
        }
        .contact__form input,
        .contact__form textarea {
          font-family: var(--font-body);
          font-size: 15px;
          padding: 10px 12px;
          border: 1px solid var(--line-dark);
          border-radius: 3px;
          color: var(--ink);
          background: var(--bg-light);
        }
        .contact__form button {
          margin-top: 4px;
        }
        .contact__status { font-size: 14px; margin: 0; }
        .contact__status--ok { color: var(--green); }
        .contact__status--err { color: #8b3a2b; }
        @media (max-width: 780px) {
          .contact__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
