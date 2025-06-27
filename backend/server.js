const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const OpenAI = require("openai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Mongoose schema & model
const journalSchema = new mongoose.Schema({
  text: String,
  summary: String,
  mood: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Journal = mongoose.model("Journal", journalSchema);

// OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST /api/entry — Analyze and store a journal entry
app.post("/api/entry", async (req, res) => {
  const { text } = req.body;
  try {
    let content;

    // Try real OpenAI call
    try {
      const aiRes = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You're a helpful assistant that analyzes a user's journal entry and returns a summary and mood in this format:\n\nSummary: <summary>\nMood: <mood>",
          },
          {
            role: "user",
            content: text,
          },
        ],
      });

      content = aiRes.choices[0].message.content || "";
    } catch (err) {
      console.warn("⚠️ Using mock response due to OpenAI error:", err.message);
      content = `Summary: This is a sample analysis of your journal.\nMood: Reflective`;
    }

    const summary = content.split("Mood:")[0]?.trim() || "No summary";
    const mood = content.split("Mood:")[1]?.trim() || "Not detected";

    const entry = new Journal({ text, summary, mood });
    await entry.save();

    res.json(entry);
  } catch (err) {
    console.error("❌ Error in OpenAI or MongoDB:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/entries — Get all journal entries
app.get("/api/entries", async (req, res) => {
  try {
    const entries = await Journal.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
