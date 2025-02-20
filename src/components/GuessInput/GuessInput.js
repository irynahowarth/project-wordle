import React from "react";

function GuessInput({ addGuessItem, guessList, gameCheck }) {
  const [guess, setGuess] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(false);

  function formHandler(e) {
    e.preventDefault();
    if (guess === "") {
      return;
    }
    addGuessItem(guess);
    const game = gameCheck(guess);
    game && setIsDisabled(true);
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
          disabled={isDisabled}
        />
      </form>
    </>
  );
}

export default GuessInput;
