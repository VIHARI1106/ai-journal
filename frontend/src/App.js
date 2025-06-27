import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEntries = async () => {
    const res = await axios.get("http://localhost:5000/api/entries");
    setEntries(res.data);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post("http://localhost:5000/api/entry", { text });
    setEntries([res.data, ...entries]);
    setText("");
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
            <p style={{ fontSize: "12px", color: "#888" }}>{new Date(entry.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
