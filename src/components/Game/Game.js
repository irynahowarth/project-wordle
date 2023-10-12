import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessItem from "../GuessItem/GuessItem";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const listItems = guessList.map(({ name, id }) => (
    <GuessItem name={name} key={id} />
  ));
  function addToGuessList(guess) {
    setGuessList((prev) => {
      const newArr = [...prev];
      newArr.push({ name: guess, id: Math.random() });
      return newArr;
    });
  }
  return (
    <>
      <div className="guess-results">{listItems}</div>
      <GuessInput addGuessItem={addToGuessList} guessList={guessList} />
    </>
  );
}

export default Game;
