import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();
const DATA_FILE = path.join(process.cwd(), "subscribers.json");

function readSubs() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
}

router.post("/", (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required." });

  const subs = readSubs();
  if (!subs.includes(email)) {
    subs.push(email);
    fs.writeFileSync(DATA_FILE, JSON.stringify(subs, null, 2));
  }
  res.status(201).json({ message: "Subscribed." });
});

export default router;
