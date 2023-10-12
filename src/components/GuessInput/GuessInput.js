import React from "react";

function GuessInput({ addGuessItem, guessList }) {
  const [guess, setGuess] = React.useState("");

  function formHandler(e) {
    e.preventDefault();
    if (guess === "") {
      return;
    }
    addGuessItem(guess);
    setGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={formHandler}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          pattern="[a-zA-Z]{5,5}"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default GuessInput;
