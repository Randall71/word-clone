// @ts-nocheck
import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const guessResult = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_ALLOWED).map((index) => (
        <Cell
          key={index}
          letter={guessResult ? guessResult[index].letter : ""}
          status={guessResult ? guessResult[index].status : ""}
        />
      ))}
    </p>
  );
}

export default Guess;
