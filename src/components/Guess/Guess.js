import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  const guessLength = typeof guess === "object" && guess.length;

  if (!guess) {
    return (
      <p className="guess">
        {range(0, NUM_OF_LETTERS_ALLOWED).map((_, index) => (
          <span key={index} className="cell"></span>
        ))}
      </p>
    );
  }

  return (
    <p className="guess">
      {guess.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}

      {guessLength < NUM_OF_LETTERS_ALLOWED &&
        range(guessLength, NUM_OF_LETTERS_ALLOWED).map((_, index) => (
          <span key={index} className="cell"></span>
        ))}
    </p>
  );
}

export default Guess;
