import React, { useEffect, useState } from "react";
import { useUnityContext } from "react-unity-webgl";
import { Game } from "../components/Game";
import { Overlay } from "../components/Overlay";

interface HomePageProps {
  showGame: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ showGame }) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const { unityProvider, isLoaded, loadingProgression, initialisationError } =
    useUnityContext({
      loaderUrl: "/gamejam/build/mock/unity-react-test.loader.js",
      dataUrl: "/gamejam/build/mock/unity-react-test.data",
      frameworkUrl: "/gamejam/build/mock/unity-react-test.framework.js",
      codeUrl: "/gamejam/build/mock/unity-react-test.wasm",
    });

  useEffect(() => {
    const savedShowGame = localStorage.getItem("showGame");
    if (savedShowGame !== null) {
      setShowOverlay(false);
    }
  }, []);

  const handlePlayGame = () => {
    setShowOverlay(false);
    localStorage.setItem("showGame", JSON.stringify(true));
  };

  const handleSkipGame = () => {
    setShowOverlay(false);
    localStorage.setItem("showGame", JSON.stringify(false));
  };

  return (
    <>
      {showOverlay && (
        <Overlay onPlayGame={handlePlayGame} onSkipGame={handleSkipGame} />
      )}
      <Game
        unityProvider={unityProvider}
        isLoaded={isLoaded}
        loadingProgression={loadingProgression}
        initialisationError={initialisationError}
        showGame={showGame}
      />
      {!showGame && !showOverlay && (
        <div>Other information for the homepage</div>
      )}
    </>
  );
};
