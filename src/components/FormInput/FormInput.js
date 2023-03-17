import React from "react";
import { checkGuess } from "../../game-helpers";

function FormInput({ handleGuess, answer }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const guessResult = checkGuess(guess, answer);
    handleGuess(guessResult);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={2}
        maxLength={5}
        pattern=".{2,5}"
        required
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default FormInput;
