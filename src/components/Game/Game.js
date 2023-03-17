// @ts-nocheck
import React from "react";
import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import FormInput from "../FormInput/FormInput";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleGuess = (guess) => {
    const nextGuesses = structuredClone(guesses);
    nextGuesses.push(guess);
    setGuesses(nextGuesses);
  };

  return (
    <>
      <div className="guess-results">
        {/* I know passing the index as the key is not a good thing, but in this case I don't want to reorder the words, so the key can be a good way to keep my code readable, so don't worry not    */}

        {range(0, NUM_OF_GUESSES_ALLOWED).map((_, index) => (
          <Guess key={index} guess={guesses[index]} answer={answer} />
        ))}
      </div>
      <FormInput handleGuess={handleGuess} answer={answer} />
    </>
  );
}

export default Game;
