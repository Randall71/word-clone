// @ts-nocheck
import React from "react";
import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import FormInput from "../FormInput/FormInput";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

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

  return (
    <>
      {guesses.length}
      {gameStatus}
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess key={index} guess={guesses[index]} answer={answer} />
        ))}
      </div>
      <FormInput
        handleGuess={handleGuess}
        answer={answer}
        guessesLength={guesses.length}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}

      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
