// @ts-nocheck
import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_ALLOWED).map((index) => (
        <Cell
          key={index}
          letter={guess ? guess[index].letter : ""}
          status={guess ? guess[index].status : ""}
        />
      ))}
    </p>
  );
}

export default Guess;
