import "./styles.css";

export default function App() {
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
            className="note-title form-title"
            placeholder="Title goes here"
          />
          <textarea
            name=""
            id=""
            placeholder="Add your notes here"
            className="note-body form-body"
          ></textarea>
          <button>Add</button>
        </div>
      </div>
      <div className="notes-grid">
        <div className="note">
          <div className="note-title">foo</div>
          <div className="note-body">bar</div>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
