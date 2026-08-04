import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="newsletter">
      <div className="container newsletter__row">
        <div>
          <h3>Get price and availability updates</h3>
          <p>One email, only when there's something worth telling you.</p>
        </div>
        <form onSubmit={handleSubmit} className="newsletter__form">
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Adding…" : "Subscribe"}
          </button>
        </form>
        {status === "sent" && <p className="newsletter__msg">Subscribed.</p>}
        {status === "error" && (
          <p className="newsletter__msg newsletter__msg--err">
            Couldn't subscribe — try again shortly.
          </p>
        )}
      </div>

      <style>{`
        .newsletter { background: var(--bg-dark-2); padding: 36px 0; border-top: 1px solid var(--line); }
        .newsletter__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .newsletter h3 { color: var(--cream); font-size: 19px; margin: 0 0 4px; }
        .newsletter p { color: var(--muted); margin: 0; font-size: 14px; }
        .newsletter__form { display: flex; gap: 10px; }
        .newsletter__form input {
          padding: 11px 14px;
          border-radius: 3px;
          border: 1px solid var(--line);
          background: transparent;
          color: var(--cream);
          font-family: var(--font-body);
          min-width: 220px;
        }
        .newsletter__msg { width: 100%; color: var(--brass-bright); font-size: 13px; margin: 0; }
        @media (max-width: 640px) {
          .newsletter__form { flex-direction: column; width: 100%; }
          .newsletter__form input { min-width: 0; width: 100%; }
        }
      `}</style>
    </div>
  );
}
