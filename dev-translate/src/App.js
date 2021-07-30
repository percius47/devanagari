import React, { useState } from "react";
import "./App.css";

var obj = {
  a: "अ",
  b: "ब",
  c: "क",
  d: "ड",
  e: "ई"
};
var objarr = Object.keys(obj);
export default function App() {
  // const [text, setText] = useState("");

  const [meaning, setMeaning] = useState("");
  function clickHandler(event) {
    var x = document.querySelector(".inputText");

    var meaning = obj[x.value];
    //console.log(objarr);
    if (meaning === undefined) meaning = "404!";
    if(x.value==="")meaning="Empty Input!"

    setMeaning(meaning);
  }

  function listClickHandler(items) {
    var meaning = obj[items];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div className="nav">
      <h1> देवनागरी</h1>
      </div>

      <div className="about">
        <h2>About</h2>
        <p>Devanagari is the art of written Hindi language. This application translates basic english letters into devanagari on the basis of how they sound.</p>
      </div>
      <input className="inputText" placeholder="Enter an English Letter.."/>
      <button onClick={clickHandler}
      className="btn"
      >Translate</button>

      <div className="output"> <span>Translated: {meaning}</span></div>
    
    <div className="listArrParent">
      {objarr.map(function (items) {
        return (
          <span
            key={items}
            onClick={() => listClickHandler(items)}
            className="listArr"
            
            style={{ cursor: "pointer", padding: "1rem" }}
          >
            {items}
          </span>
        );
      })}
      </div>

      <div className="footer">
        <small>Made with ❤️ in भारत !</small>
      </div>
    </div>
  );
}
