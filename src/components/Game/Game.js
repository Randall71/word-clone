import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import FormInput from "../FormInput/FormInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);

  const addWord = (word) => {
    const nextWords = [...words];
    nextWords.push(word);
    setWords(nextWords);
  };

  return (
    <>
      <GuessResults guesses={words} answer={answer} />
      <FormInput addWord={addWord} />
    </>
  );
}

export default Game;
