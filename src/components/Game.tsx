import { useUnityContext } from "react-unity-webgl";
import { PacmanLoader } from "react-spinners";
import { GameContainer, PacmanContainer, UnityCanvas } from "./Game.styled";
import React from "react";
import { Title } from "../styles/sharedStyles";

export const Game: React.FC = () => {
  const { unityProvider, isLoaded, initialisationError } = useUnityContext({
    loaderUrl: "/gamejam/build/game/game-jam.loader.js",
    dataUrl: "/gamejam/build/game/game-jam.data",
    frameworkUrl: "/gamejam/build/game/game-jam.framework.js",
    codeUrl: "/gamejam/build/game/game-jam.wasm",
  });

  if (initialisationError) {
    return <div> Oops, sorry! There was an error loading the game!</div>;
  }

  return (
    <>
      {isLoaded === false && (
        <PacmanContainer>
          <Title>Loading</Title>
          <PacmanLoader color="#B061FF" data-testid="pacman-loader" />
        </PacmanContainer>
      )}
      <GameContainer>
        <UnityCanvas unityProvider={unityProvider} />
      </GameContainer>
    </>
  );
};
