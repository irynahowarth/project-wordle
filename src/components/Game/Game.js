import React from "react";

import { sample, range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import GuessInput from "../GuessInput/GuessInput";
import GuessItem from "../GuessItem/GuessItem";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
const guessNumArray = range(0, NUM_OF_GUESSES_ALLOWED, 1);
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

  function guessChecker(word) {
    return checkGuess(word, answer);
  }
  return (
    <>
      <div className="guess-results">
        {guessNumArray.map((el) => (
          <Guess
            value={guessList[el]?.name}
            id={guessList[el]?.id}
            key={guessList[el]?.id || Math.random()}
            guessCheck={guessChecker}
          />
        ))}
      </div>
      <GuessInput addGuessItem={addToGuessList} guessList={guessList} />
    </>
  );
}

export default Game;
