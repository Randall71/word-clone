import React from "react";

function FormInput({ addWord }) {
  const [word, setWord] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWord(word);
    setWord("");
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
        value={word}
        onChange={(e) => setWord(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default FormInput;
