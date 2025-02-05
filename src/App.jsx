import { useState } from "react";
import Dictaphone from "./components/Dictaphone";

function App() {
  const [notes, setNotes] = useState([{ id: 0, message: "Hello, this is your first note!" }]);
  const [message, setMessage] = useState("");

  const handleRemove = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleAdd = () => {
    if (message.trim() !== "") {
      setNotes([...notes, { id: notes.length + 1, message }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">📝 Note Maker App</h1>

      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <div className="flex space-x-2">
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Type your note here..."
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 outline-none"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </div>

      <ul className="w-full max-w-md mt-6 space-y-3">
        {notes.map((note) => (
          <li
            key={note.id}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md"
          >
            <span className="text-gray-800">{note.message}</span>
            <button
              onClick={() => handleRemove(note.id)}
              className="text-red-500 hover:text-red-700 transition"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className="w-full max-w-md mt-6 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">🎙️ Voice Notes</h2>
        <Dictaphone setMessage={setMessage} />
      </div>
    </div>
  );
}

export default App;
