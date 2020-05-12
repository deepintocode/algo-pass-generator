import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Guide from "./components/Guide";

function App() {
  const [view, setView] = useState("Card");
  return (
    <div className="App">
      <Header view={view} setView={setView} />
      {view === "Card" ? (
        <div className="Card-view">
          <Card />
        </div>
      ) : null}
      {view === "Guide" ? (
        <div className="Guide-view">
          <Guide />
        </div>
      ) : null}
    </div>
  );
}

export default App;
