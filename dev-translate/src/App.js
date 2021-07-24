import React, { useState } from "react";
import "./App.css";

var obj = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E"
};
var objarr = Object.keys(obj);
export default function App() {
  // const [text, setText] = useState("");

  const [meaning, setMeaning] = useState("");
  function clickHandler(event) {
    var x = document.querySelector(".inputText");

    var meaning = obj[x.value];
    //console.log(objarr);
    if (meaning === undefined) meaning = "come back later";

    setMeaning(meaning);
  }

  function listClickHandler(items) {
    var meaning = obj[items];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div>
      <h1>Hello world</h1></div>
      <input className="inputText" />
      <button onClick={clickHandler}>Translate</button>
      <div className="output"> {meaning}</div>

      {objarr.map(function (items) {
        return (
          <span
            key={items}
            onClick={() => listClickHandler(items)}
            style={{ cursor: "pointer", padding: "1rem" }}
          >
            {items}
          </span>
        );
      })}
    </div>
  );
}
