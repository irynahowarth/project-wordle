import React from "react";

function Guess({ value = "" }) {
  const arr = value.length !== 5 ? new Array(5).fill("") : value.split("");
  const cells = arr.map((el) => (
    <span className="cell" key={Math.random()}>
      {el}
    </span>
  ));

  return <p className="guess">{cells}</p>;
}

export default Guess;
