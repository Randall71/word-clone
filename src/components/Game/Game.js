import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import FormInput from "../FormInput/FormInput";
import GridWords from "../GridWords/GridWords";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [words, setWords] = React.useState([]);

  const addWord = (word) => {
    console.log(word, "wwww");
    const nextWords = [...words];
    nextWords.push(word);
    setWords(nextWords);
  };

  return (
    <>
      <GridWords words={words} />
      <FormInput addWord={addWord} />
    </>
  );
}

export default Game;
