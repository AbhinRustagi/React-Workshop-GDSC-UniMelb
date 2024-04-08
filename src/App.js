import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="top-title">hello.</div>
      </div>
      <div className="notes-grid">
        <div className="note">
          <div className="note-title">foo</div>
          <div className="note-body">bar</div>
          <button className="delete-btn">delete</button>
        </div>
      </div>
    </div>
  );
}
