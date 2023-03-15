import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {/* I know passing the index as the key is not a good thing, but in this case I don't want to reorder the words, so the key can be a good way to keep my code readable, so don't worry not    */}

      {range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess key={index} guess={guesses[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
