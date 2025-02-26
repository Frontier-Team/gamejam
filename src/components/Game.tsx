import { Unity, useUnityContext } from "react-unity-webgl";
import { PacmanLoader } from "react-spinners";
import { GameContainer } from "./Game.styled";


export const Game = () => {
  const { unityProvider, isLoaded, initialisationError } =
    useUnityContext({
      loaderUrl: "/gamejam/build/game/game-jam.loader.js",
      dataUrl: "/gamejam/build/game/game-jam.data",
      frameworkUrl: "/gamejam/build/game/game-jam.framework.js",
      codeUrl: "/gamejam/build/game/game-jam.wasm",
    });


  if (initialisationError) {
    return <div>Error loading the game!</div>;
  }

  const viewWidth = window.innerWidth;
  console.log("view width:  ", viewWidth);
  const viewHeight = window.innerHeight;

  return (
    <>
      {isLoaded === false && (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <PacmanLoader color="#B061FF" data-testid="pacman-loader" />

        </div>
      )}

      <GameContainer>
        <Unity
          unityProvider={unityProvider}
          style={{
            width: viewWidth - 50, height: viewHeight * 0.8,
          }}
        />
      </GameContainer>

    </>
  );
};
