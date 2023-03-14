import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import FormInput from "../FormInput/FormInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return (
    <>
      <FormInput />
    </>
  );
}

export default Game;
