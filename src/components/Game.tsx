import React from "react";
import { Unity } from "react-unity-webgl";
import { GameContainer } from "./Game.styled";

interface GameProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  unityProvider: any;
  isLoaded: boolean;
  loadingProgression: number;
  initialisationError: unknown;
  showGame: boolean;
}

export const Game: React.FC<GameProps> = ({
  unityProvider,
  isLoaded,
  loadingProgression,
  initialisationError,
  showGame,
}) => {
  if (initialisationError) {
    return <div>Error loading the game!</div>;
  }
  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <>
      {isLoaded === false && showGame && (
        <div className="container">
          <h3>
            Loading...{loadingPercentage ? `(${loadingPercentage}%)` : null}
          </h3>
        </div>
      )}
      {showGame && (
        <GameContainer>
          <Unity
            unityProvider={unityProvider}
            style={{ width: "100%", height: "100%" }}
          />
        </GameContainer>
      )}
    </>
  );
};
