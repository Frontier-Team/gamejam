import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { AppThemeProvider } from "./providers/ThemeProvider";

export const App = () => {
  const [showGame, setShowGame] = useState<boolean>(true);

  useEffect(() => {
    const savedShowGame = localStorage.getItem("showGame");
    if (savedShowGame !== null) {
      setShowGame(JSON.parse(savedShowGame));
    }
  }, []);

  const toggleShowGame = () => {
    setShowGame((prevShowGame) => {
      const newShowGame = !prevShowGame;
      localStorage.setItem("showGame", JSON.stringify(newShowGame));
      return newShowGame;
    });
  };

  return (
    <AppThemeProvider>
      <BrowserRouter basename="/gamejam">
        <NavBar toggleShowGame={toggleShowGame} showGame={showGame} />
        <Routes>
          <Route path="/" element={<HomePage showGame={showGame} />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
