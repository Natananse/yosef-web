import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// Phase 1: submissions are appended to a local JSON file so nothing is lost
// even without a database yet.
// Phase 2: swap this file-write for a Postgres insert, and trigger a
// WhatsApp/Telegram notification here instead of (or alongside) this.
const DATA_FILE = path.join(process.cwd(), "inquiries.json");

function readInquiries() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

function saveInquiry(entry) {
  const all = readInquiries();
  all.push(entry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2));
}

router.post("/", (req, res) => {
  const { name, email, phone, message, commodity } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required.",
    });
  }

  const entry = {
    name,
    email,
    phone: phone || null,
    commodity: commodity || "Not specified",
    message,
    receivedAt: new Date().toISOString(),
  };

  saveInquiry(entry);

  return res.status(201).json({ message: "Inquiry received." });
});

// Lets the future admin page (Phase 2) list submissions
router.get("/", (req, res) => {
  res.json(readInquiries());
});

export default router;
