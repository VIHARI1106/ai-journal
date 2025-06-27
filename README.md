# 🧠 AI-Powered Daily Journal App

A full-stack journaling web application that allows users to write and save their daily thoughts. The app uses the OpenAI API (or a simulated fallback) to generate a summary and detect the mood of each journal entry. All entries are stored in a MongoDB database and displayed in a beautiful, timestamped timeline.

---

## 🧠 Description

This journaling app allows users to log their daily thoughts and get an AI-generated summary and mood. The entries are saved to a MongoDB database and displayed in a timeline format on the frontend.  
⚠️ While the OpenAI API key quota has been exhausted, a mock analysis system is in place to simulate AI responses.

---

## 🚀 Features

- ✍️ Add daily thoughts with a simple interface
- 🤖 Get AI-generated **summary** and **mood** for each entry
- 🕒 View past entries in a timeline format
- 🧠 Integrated with OpenAI's GPT for natural language processing (with fallback if quota exceeded)
- 📦 MongoDB backend for secure data storage
- 🌐 Fully deployed and accessible on the web

---

## 📸 Demo

**Frontend:**  
🔗 [https://ai-journal-frontend-chi.vercel.app](https://ai-journal-frontend-chi.vercel.app)

**Backend API:**  
🔗 [https://ai-journal-backend-j3ix.onrender.com](https://ai-journal-backend-j3ix.onrender.com)

---

## 🛠️ Tech Stack

| Frontend        | Backend         | Database       | AI Engine   | Hosting        |
|----------------|----------------|----------------|-------------|----------------|
| React (CRA)    | Node.js + Express | MongoDB Atlas | OpenAI API (mock fallback) | Vercel + Render |

---

## 📄 Sample Journal Entry

```txt
Entry:
"Feeling confident and relaxed today, everything seems to be in control."

Summary:
This is a sample analysis of your journal.

Mood:
Reflective
📁 Project Structure
bash
Copy code
ai-journal/
│
├── backend/            # Express server with MongoDB & OpenAI integration
│   └── server.js
│   └── .env            # (not committed) contains Mongo URI and API key
│
├── frontend/           # React client
│   └── src/
│   └── public/
│
├── .gitignore
└── README.md
🧪 Environment Variables
In the backend .env file (excluded from version control):

env
Copy code
MONGO_URI=your_mongo_uri
OPENAI_API_KEY=your_openai_api_key
In the frontend (via Vercel settings):

env
Copy code
REACT_APP_API_BASE_URL=https://ai-journal-backend-j3ix.onrender.com
🧩 How it Works
User submits a journal entry through the frontend.

The backend uses the OpenAI API to analyze the text (or simulates a response if quota is exceeded).

It extracts the summary and mood, saves them in MongoDB.

Entries are displayed in reverse-chronological order in the UI.

🧠 Future Improvements
Enable rich text editing for journal input

Allow editing or deleting past entries

Support multiple users with login

Visualize mood over time using charts

📜 License
MIT License — feel free to fork, modify, and build on top of it.

👤 Author
Prabhugari Vihari
GitHub: @VIHARI1106
