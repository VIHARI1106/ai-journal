import React, { useState, useEffect } from "react";
import axios from "axios";

// ✅ Declare after imports
const API = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEntries = async () => {
    try {
      const res = await axios.get(`${API}/api/entries`);
      setEntries(res.data);
    } catch (err) {
      console.error("Failed to fetch entries:", err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${API}/api/entry`, { text });
      setEntries([res.data, ...entries]);
      setText("");
    } catch (err) {
      console.error("Failed to submit entry:", err);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>AI-Powered Daily Journal</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="6"
          placeholder="Write your thoughts here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Analyzing..." : "Submit Entry"}
        </button>
      </form>

      <div>
        {entries.map((entry) => (
          <div key={entry._id} className="entry">
            <p>{entry.text}</p>
            <p><strong>Summary:</strong> {entry.summary}</p>
            <p><strong>Mood:</strong> {entry.mood}</p>
            <p style={{ fontSize: "12px", color: "#888" }}>
              {new Date(entry.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
