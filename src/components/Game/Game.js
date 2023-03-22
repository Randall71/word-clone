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

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));

  const [guesses, setGuesses] = React.useState([]);
  //running , won , lost
  const [gameStatus, setGameStatus] = React.useState("running");

  const handleGuess = (guess) => {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= 6) {
      setGameStatus("lost");
    }
  };

  const handleRestart = () => {
    const nextAnswer = sample(WORDS);
    setAnswer(nextAnswer);
    setGuesses([]);
    setGameStatus("running");
  };

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      {console.log(answer)}
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
          <Guess key={index} guess={validatedGuesses[index]} answer={answer} />
        ))}
      </div>
      <FormInput handleGuess={handleGuess} gameStatus={gameStatus} />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === "won" && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}

      {gameStatus === "lost" && (
        <LostBanner answer={answer} handleRestart={handleRestart} />
      )}
    </>
  );
}

export default Game;
