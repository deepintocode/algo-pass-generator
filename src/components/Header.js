import React from "react";
import "./Header.css";

export default function Header({ view, setView }) {
  const handeClick = (e) => setView(e.target.dataset.name);
  const media = window.matchMedia("(max-width: 768px)").matches;

  console.log(media);
  return (
    <div className="Header">
      <ul
        className="Header-list"
        style={
          view === "Guide" && media ? { backgroundColor: "#13262f" } : null
        }
      >
        <li
          style={view === "Guide" && media ? { color: "#f7ece1" } : null}
          data-name="Card"
          className="Header-list-item"
          onClick={handeClick}
        >
          Password Generator
        </li>
        <li
          style={view === "Guide" && media ? { color: "#f7ece1" } : null}
          data-name="Guide"
          className="Header-list-item"
          onClick={handeClick}
        >
          How it Works
        </li>
      </ul>
    </div>
  );
}
