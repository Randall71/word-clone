import React from "react";

function FormInput({ handleGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <>
      {gameStatus}
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
          disabled={gameStatus !== "running"}
        />
      </form>
    </>
  );
}

export default FormInput;
