# 🧠 AI-Powered Daily Journal App

A full-stack journaling web application that allows users to write and save their daily thoughts. The app uses the **OpenAI API** (or a simulated fallback) to generate a **summary** and detect the **mood** of each journal entry. All entries are stored in a **MongoDB** database and displayed in a beautiful, timestamped timeline.

---

## 🧠 Description

This journaling app allows users to log their daily thoughts and get an AI-generated summary and mood. The entries are saved to a MongoDB database and displayed in a timeline format on the frontend.  
⚠️ If the **OpenAI API key quota is exhausted** or fails to respond, a **fallback system** kicks in to simulate AI responses without breaking the app.

---

## 🚀 Features

- ✍️ Add daily thoughts with a simple interface
- 🤖 Get AI-generated **summary** and **mood** for each entry
- 🔁 Fallback logic when OpenAI API quota is exceeded
- 🕒 View past entries in a timeline format
- 📦 MongoDB backend for secure data storage
- 🌐 Fully deployed and accessible on the web

---

## ⚠️ Fallback Behavior: When OpenAI API Quota is Exceeded

If your OpenAI API key is expired, invalid, or quota is exceeded, the app will **not crash**. Instead, it uses a fallback that dynamically generates a summary and mood using the first few words of the journal:

### Example Output:
Entry: I'm feeling sad why this happens to me always
Summary: You wrote about "I'm feeling sad why thi..."
Mood: Neutral

php
Copy
Edit

### ✅ Fallback Code Example (in Node.js):
```js
function fallbackAnalysis(text) {
  const summary = `You wrote about "${text.slice(0, 30)}..."`;
  const mood = text.toLowerCase().includes('happy') ? 'happy' :
               text.toLowerCase().includes('sad') ? 'sad' : 'Neutral';
  return { summary, mood };
}
This ensures users can continue journaling even when OpenAI is temporarily unavailable.

📸 Demo
Frontend:
🔗 https://ai-journal-frontend-chi.vercel.app

Backend API:
🔗 https://ai-journal-backend-j3ix.onrender.com

🛠️ Tech Stack
Frontend	Backend	Database	AI Engine	Hosting
React.js	Node.js + Express	MongoDB Atlas	OpenAI API (with fallback)	Vercel + Render

🧪 Sample Journal Entries
1️⃣ Entry:

txt
Copy
Edit
I'm feeling sad why this happens to me always  
Summary: You wrote about "I'm feeling sad why thi..."  
Mood: Neutral
2️⃣ Entry:

txt
Copy
Edit
I'm happy with all good thoughts  
Summary: You wrote about "I'm happy with all good t..."  
Mood: happy
📁 Project Structure
bash
Copy
Edit
ai-journal/
│
├── backend/            # Express server with MongoDB & OpenAI integration
│   ├── server.js
│   ├── routes/
│   ├── models/
│   └── .env            # (ignored) contains Mongo URI and API key
│
├── frontend/           # React client
│   ├── src/
│   ├── public/
│   └── .env            # (ignored) contains frontend config
│
├── .gitignore
└── README.md
🧪 Environment Variables
In the backend .env file (not committed):
env
Copy
Edit
MONGO_URI=your_mongo_uri
OPENAI_API_KEY=your_openai_api_key
PORT=5000
In the frontend .env file:
env
Copy
Edit
REACT_APP_API_BASE_URL=https://ai-journal-backend-j3ix.onrender.com
⚙️ Installation & Setup
Clone the repo:

bash
Copy
Edit
git clone https://github.com/VIHARI1106/ai-journal.git
cd ai-journal
Install backend dependencies:

bash
Copy
Edit
cd backend
npm install
Create backend .env:

env
Copy
Edit
MONGO_URI=your_mongodb_uri
OPENAI_API_KEY=your_openai_api_key
PORT=5000
Install frontend dependencies:

bash
Copy
Edit
cd ../frontend
npm install
Create frontend .env:

env
Copy
Edit
REACT_APP_API_BASE_URL=http://localhost:5000
Run both servers:

bash
Copy
Edit
# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm start
📈 Future Improvements
📝 Rich text editor for journal entries

🧮 Mood trends over time with charts

🔐 Authentication for multiple users

🗑️ Ability to delete or edit past entries

📜 License
MIT License — feel free to fork, modify, and build on top of it.

👤 Author
Prabhugari Vihari
GitHub: @VIHARI1106
