import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  return (
    <p className="guess">
      {!guess
        ? range(0, NUM_OF_GUESSES_ALLOWED - 1).map((_, index) => (
            <span key={index} className="cell"></span>
          ))
        : checkGuess(guess, answer)?.map((result, index) => (
            <span key={index} className={`cell ${result.status}`}>
              {result.letter}
            </span>
          ))}
      {checkGuess(guess, answer)?.length < 5 &&
        range(
          checkGuess(guess, answer)?.length,
          NUM_OF_GUESSES_ALLOWED - 1
        ).map((_, index) => <span key={index} className="cell"></span>)}
    </p>
  );
}

export default Guess;
