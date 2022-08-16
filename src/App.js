import React, { useState } from "react";
import "./styles.css";

const alphabetDictionary = {
  A: "Apple",
  B: "Ball",
  C: "Cat",
  D: "Doll",
  E: "Egg",
  F: "Frog",
  G: "Glass",
  H: "Hat",
  I: "Igloo",
  J: "Jam",
  K: "Kite",
  L: "Lamb",
  M: "Men",
  N: "Net",
  O: "Onion",
  P: "Pan",
  Q: "Queen",
  R: "Ring",
  S: "Star",
  T: "Train",
  U: "Umbrella",
  V: "Van",
  W: "Watch",
  X: "Xylophone",
  Y: "Yacht",
  Z: "Zebra"
};
var characterObject = Object.keys(alphabetDictionary);
export default function App() {
  const [showCharacter, setShowCharacter] = useState(
    "Translation will shown here.."
  );
  function alphaChangeHandler(event) {
    var charName = alphabetDictionary[event.target.value];
    //setC(charName);
    if (charName === undefined) {
      charName = "Oh Oh! this character is not in our library";
    }
    setShowCharacter(charName);
  }
  function clickHandler(char) {
    setShowCharacter(alphabetDictionary[char]);
  }
  return (
    <div className="App">
      <h1> Alphabet Intrepreter</h1>
      <p className="note"> plase enter your character in Capital Size..</p>
      <input
        className="inputField"
        onChange={alphaChangeHandler}
        placeholder="Enter your text here."
      />

      <p> {showCharacter}</p>
      <ul className="unoderedList">
        {characterObject.map((char) => {
          return (
            <li className="list" onClick={() => clickHandler(char)} key={char}>
              <a href="#output"> {char} </a>
            </li>
          );
        })}
      </ul>
      <footer className="footer">
        <div className="footer-div">
          <p>
            Made with <i className="fa fa-heart"></i> by{" "}
            <a href="/" target="_blank" className="with-para">
              {" "}
              Arun
            </a>
            <a href="https://github.com/anshu1016" target="_blank">
              {" "}
              <i className="fa fa-github"></i>
            </a>{" "}
            <a href="https://twitter.com/ArunShu47012704" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/arun-shukla-1399a9196"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
