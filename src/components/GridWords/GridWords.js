import React from "react";

function GridWords({ words }) {
  return (
    <div className="guess-results">
      {/* I know passing the index as the key is not a good thing, but in this case I don't want to reorder the words, so the key can be a good way to keep my code readable, so don't worry not    */}
      {words.map((word, index) => (
        <p key={index} className="guess">
          {word}
        </p>
      ))}
    </div>
  );
}

export default GridWords;
