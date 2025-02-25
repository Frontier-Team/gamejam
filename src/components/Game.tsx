import { Unity, useUnityContext } from "react-unity-webgl";
import { GameContainer } from "./Game.styled";

export const Game = () => {
  const { unityProvider, isLoaded, loadingProgression, initialisationError } =
    useUnityContext({
      loaderUrl: "/gamejam/build/game/game-jam.loader.js",
      dataUrl: "/gamejam/build/game/game-jam.data",
      frameworkUrl: "/gamejam/build/game/game-jam.framework.js",
      codeUrl: "/gamejam/build/game/game-jam.wasm",
    });

  if (initialisationError) {
    return <div>Error loading the game!</div>;
  }
  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <>
      {isLoaded === false && (
        <div className="container">
          <h3>
            Loading...{loadingPercentage ? `(${loadingPercentage}%)` : null}
          </h3>
        </div>
      )}
      <GameContainer>
        <Unity
          unityProvider={unityProvider}
          style={{ width: "100%", height: "100%" }}
        />
      </GameContainer>
    </>
  );
};
