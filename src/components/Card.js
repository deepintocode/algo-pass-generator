import React, { useState } from "react";
import Password from "./Password";
import Options from "./Options";

import "./Card.css";
const availableOptions = {
  "Name of service you want to signup for": "Reddit",
  "Phrase of choice": "It's the end of the world as we know it",
  "Include first character of website/app": false,
  "Include last character of website/app": false,
  "Capitalize characters according to website characters' parity": false,
  "Include total number of characters of website/app": false,
  "Include punctuation symbol of choice": false,
  "Punctuation mark": "!",
};

export default function Card() {
  const [options, setOptions] = useState(availableOptions);
  return (
    <div className="Card">
      <Password options={options} />
      <Options options={options} setOptions={setOptions} />
    </div>
  );
}
