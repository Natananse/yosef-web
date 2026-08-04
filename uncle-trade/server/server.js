import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.js";
import newsletterRouter from "./routes/newsletter.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRouter);
app.use("/api/newsletter", newsletterRouter);

// Simple health check — useful once this is deployed
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
