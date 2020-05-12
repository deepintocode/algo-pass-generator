import React, { useState } from "react";

import "./Options.css";

export default function Options({ options, setOptions }) {
  const [activeClasses, setActiveClasses] = useState([]);
  const optionNames = Object.keys(options);
  const optionChoices = Object.values(options);
  const punctuationRegex = /[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g;
  const isPunctuationSymbol = punctuationRegex.test(optionChoices[7]);

  const handleChange = (e) => {
    if (e.target.type === "text") {
      setOptions({
        ...options,
        [e.target.dataset.name]: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      if (activeClasses.includes(e.target.dataset.name)) {
        setActiveClasses(
          activeClasses.filter(
            (activeClass) => activeClass !== e.target.dataset.name
          )
        );
      } else {
        setActiveClasses([...activeClasses, e.target.dataset.name]);
      }
      setOptions({
        ...options,
        [e.target.dataset.name]: e.target.checked,
      });
      console.log(activeClasses);
    }
  };

  const inputTextOption = (name, choice, id) => (
    <li className="Options-item Options-text">
      <label htmlFor={id}>{name}</label>
      <input
        type="text"
        contentEditable="true"
        id={id}
        data-name={name}
        value={choice}
        onChange={handleChange}
      />
    </li>
  );

  const inputCheckboxOption = (name, choice, id) => (
    <li className="Options-item Options-checkbox">
      <label
        htmlFor={id}
        className={
          activeClasses.includes(name)
            ? "Options-checkbox-label active"
            : "Options-checkbox-label"
        }
      >
        {name}
      </label>
      <input
        type="checkbox"
        data-name={name}
        hidden
        id={id}
        value={choice}
        disabled={!optionChoices[0]}
        onChange={handleChange}
      />
    </li>
  );

  const inputPunctuation = (
    name,
    choice,
    punctuationChoice,
    punctuationSymbol,
    id
  ) => {
    const checkActiveClass = activeClasses.includes(name)
      ? "Options-checkbox-label active"
      : "Options-checkbox-label";
    const checkPunctuationClass = isPunctuationSymbol
      ? "Options-checkbox-label"
      : null;
    const classes = `${checkActiveClass} ${checkPunctuationClass}`;
    return (
      <li className="Options-item Options-checkbox">
        <label
          className={classes}
          htmlFor={id}
          style={isPunctuationSymbol ? null : { color: "#7c0b2b" }}
        >
          {isPunctuationSymbol || !choice
            ? name
            : "Please enter a punctuation symbol"}
        </label>
        <input
          type="checkbox"
          value={choice}
          hidden
          id={id}
          data-name={name}
          disabled={!optionChoices[0]}
          onChange={handleChange}
        />
        {choice ? (
          <input
            type="text"
            id="punctuationInput"
            data-name={punctuationChoice}
            maxLength="1"
            style={{ width: "30px" }}
            value={punctuationSymbol}
            onChange={handleChange}
          />
        ) : null}
      </li>
    );
  };

  return (
    <ul className="Options">
      {inputTextOption(optionNames[0], optionChoices[0], "service-name")}
      {inputTextOption(optionNames[1], optionChoices[1], "phrase-choice")}
      {inputCheckboxOption(optionNames[2], optionChoices[2], "first-letter")}
      {inputCheckboxOption(optionNames[3], optionChoices[3], "last-letter")}
      {inputCheckboxOption(
        optionNames[4],
        optionChoices[4],
        "capitalize-characters"
      )}
      {inputCheckboxOption(
        optionNames[5],
        optionChoices[5],
        "include-total-numbers"
      )}
      {inputPunctuation(
        optionNames[6],
        optionChoices[6],
        optionNames[7],
        optionChoices[7],
        "include-punctuation"
      )}
      {/* <li>
        <label htmlFor={optionNames[1]}>{optionNames[1]}</label>
        <input
          id="test"
          type="checkbox"
          value={optionChoices[1]}
          data-optionname={optionNames[1]}
          onChange={handleChange}
        />
      </li> */}
      {/* <ul className="Options-names">{optionNames}</ul>
      <ul className="Options-choices">{optionChoices}</ul> */}
      {/* <input
        type="text"
        value={options["Phrase of choice"]}
        data-optionname="Phrase of choice"
        onChange={handleChange}
      />
      <input
        type="text"
        value={options["Name of service you want to signup"]}
        data-optionname="Name of service you want to signup"
        onChange={handleChange}
      /> */}
    </ul>
  );
}
