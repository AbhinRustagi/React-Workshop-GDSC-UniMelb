import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [noteCounter, setNoteCounter] = useState(0);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  useEffect(() => {
    setNoteTitle("");
    setNoteBody("");
  }, [notes]);

  const addNote = () => {
    const id = noteCounter + 1;
    const note = {
      id,
      title: noteTitle,
      body: noteBody,
    };

    setNotes((notes) => [note, ...notes]);
    setNoteCounter(id);
  };

  const deleteNote = (id) => {
    const index = notes.findIndex((note) => note.id === id);
    const tempNotes =
      index > -1 ? notes.filter((note) => note.id !== id) : notes;
    setNotes(tempNotes);
  };

  return (
    <div className="App">
      <div className="top">
        <div className="top-title">hello.</div>
      </div>
      <div className="console">
        <div className="note form">
          <input
            type="text"
            name=""
            id=""
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            className="note-title form-title"
            placeholder="Title goes here"
          />
          <textarea
            name=""
            id=""
            placeholder="Add your notes here"
            className="note-body form-body"
            value={noteBody}
            onChange={(e) => setNoteBody(e.target.value)}
          ></textarea>
          <button onClick={addNote}>Add</button>
        </div>
      </div>
      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note?.id} className="note">
            <div className="note-title">{note?.title}</div>
            <div className="note-body">{note?.body}</div>
            <button onClick={() => deleteNote(note?.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
