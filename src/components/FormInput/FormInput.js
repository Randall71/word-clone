import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function FormInput({ handleGuess, answer, guessesLength }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  const [inputStateDisabled, setInputStateDisabled] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const guessResult = checkGuess(tentativeGuess, answer);
    handleGuess(guessResult);
    setTentativeGuess("");

    if (guessesLength + 1 > NUM_OF_GUESSES_ALLOWED - 1) {
      setInputStateDisabled(true);
    } else {
      setInputStateDisabled(tentativeGuess === answer);
    }
  };

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          minLength={5}
          maxLength={5}
          pattern=".{5}"
          required
          value={tentativeGuess}
          onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
          disabled={inputStateDisabled}
        />
        {inputStateDisabled && (
          <div className="banner happy">
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {guessesLength} guesses</strong>.
            </p>
          </div>
        )}
        {guessesLength >= NUM_OF_GUESSES_ALLOWED && (
          <div className="banner sad">
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>
            </p>
          </div>
        )}
      </form>
    </>
  );
}

export default FormInput;
