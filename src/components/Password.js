import React from "react";
import "./Password.css";

export default function Password({ options }) {
  const optionChoices = Object.values(options);
  const serviceNameLength = optionChoices[0].length;
  const punctuationRegex = /[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g;
  let passwordPhrase;

  const handleClick = (e) => {
    e.persist();
    navigator.clipboard.writeText(passwordPhrase);
    // const fontSize = e.currentTarget.style["font-size"];
    // console.log(fontSize);
    console.log(e.currentTarget.style);
    // e.target.style.fontSize = "1.2rem";
    e.target.innerText = "Copied to clipboard";
    setTimeout(() => (e.target.innerText = passwordPhrase), 2000);
  };

  if (optionChoices[1]) {
    passwordPhrase = optionChoices[1]
      .match(/\b(\w+)'?(\w+)?\b/g)
      .map((word) => word[0].toLowerCase())
      .join("");
  }

  if (optionChoices[4]) {
    const evenParity = serviceNameLength % 2 === 0;
    if (evenParity) {
      passwordPhrase = Array.from(passwordPhrase)
        .map((letter, i) => {
          if (i % 2 !== 0) {
            return letter.toUpperCase();
          } else {
            return letter;
          }
        })
        .join("");
    } else {
      passwordPhrase = Array.from(passwordPhrase)
        .map((letter, i) => {
          if (i % 2 === 0) {
            return letter.toUpperCase();
          } else {
            return letter;
          }
        })
        .join("");
    }
  }

  if (optionChoices[2] && optionChoices[0]) {
    passwordPhrase = optionChoices[0][0].toLowerCase().concat(passwordPhrase);
  }

  if (optionChoices[3] && optionChoices[0]) {
    passwordPhrase = passwordPhrase.concat(
      optionChoices[0][optionChoices[0].length - 1].toLowerCase()
    );
  }

  if (optionChoices[5]) {
    passwordPhrase = passwordPhrase.concat(serviceNameLength.toString());
  }

  if (optionChoices[6] && punctuationRegex.test(optionChoices[7])) {
    passwordPhrase = passwordPhrase.concat(optionChoices[7]);
  }

  return (
    <div className="Password">
      <h2>Algorithmic</h2>
      <h1>Password Generator</h1>
      <p className="Password-field" onClick={handleClick}>
        {passwordPhrase}
      </p>
    </div>
  );
}
