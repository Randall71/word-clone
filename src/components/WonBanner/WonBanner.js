import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ numOfGuesses, handleRestart }) {
  const num = numOfGuesses > 1 ? `${numOfGuesses} guesses` : `1 guess`;
  return (
    <Banner status="happy" action={handleRestart} actionText="Restart game">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {num}</strong>.
      </p>
    </Banner>
  );
}

export default WonBanner;
