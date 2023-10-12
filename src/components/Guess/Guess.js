import React from "react";

function Guess({ value = "", guessCheck }) {
  const arr = value ? value.split("") : new Array(5).fill("");
  const addStyles = guessCheck(value) || "";
  const cells = arr.map((el, index) => (
    <span
      className={`cell ${addStyles && addStyles[index].status}`}
      key={Math.random()}
    >
      {el}
    </span>
  ));
  return <p className="guess">{cells}</p>;
}

export default Guess;
