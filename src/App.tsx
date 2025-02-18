import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import { AppThemeProvider } from "./providers/ThemeProvider";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter basename="/gamejam">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
