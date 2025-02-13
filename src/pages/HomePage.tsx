import React, { useState } from "react";
import { Game } from "../components/Game";
import { Overlay } from "../components/Overlay";

export const HomePage: React.FC = () => {
  const [showGame, setShowGame] = useState<boolean | null>(null);

  const handlePlayGame = () => {
    setShowGame(true);
  };

  const handleSkipGame = () => {
    setShowGame(false);
  };

  return (
    <>
      {showGame === null && (
        <Overlay onPlayGame={handlePlayGame} onSkipGame={handleSkipGame} />
      )}
      {showGame && <Game />}
      {!showGame && <div>Other information for the homepage</div>}
    </>
  );
};
