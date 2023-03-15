import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {!guess
        ? range(0, NUM_OF_GUESSES_ALLOWED - 1).map((_, index) => (
            <span key={index} className="cell"></span>
          ))
        : range(0, NUM_OF_GUESSES_ALLOWED - 1).map((_, index) => (
            <span key={index} className="cell">
              {guess[index]}
            </span>
          ))}
    </p>
  );
}

export default Guess;
