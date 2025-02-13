import { Unity, useUnityContext } from "react-unity-webgl";

export const Game = () => {
  const { unityProvider, isLoaded, loadingProgression, initialisationError } =
    useUnityContext({
      loaderUrl: "../build/mock/unity-react-test.loader.js",
      dataUrl: "../build/mock/unity-react-test.data",
      frameworkUrl: "../build/mock/unity-react-test.framework.js",
      codeUrl: "../build/mock/unity-react-test.wasm",
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
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100vw", height: "100vh" }}
      />
    </>
  );
};
