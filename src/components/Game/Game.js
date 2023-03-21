// @ts-nocheck
import React from "react";
import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import FormInput from "../FormInput/FormInput";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { checkGuess } from "../../game-helpers";
import Keyboard from "../Keyboard/Keyboard";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  //running , won , lost
  const [gameStatus, setGameStatus] = React.useState("running");

  const handleGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    console.log(nextGuesses);

    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= 6) {
      setGameStatus("lost");
    }
  };

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess key={index} guess={validatedGuesses[index]} answer={answer} />
        ))}
      </div>
      <FormInput
        handleGuess={handleGuess}
        answer={answer}
        guessesLength={guesses.length}
        gameStatus={gameStatus}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}

      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
