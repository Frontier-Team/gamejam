import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { AppThemeProvider } from "./providers/ThemeProvider";
import { SpeakerPage } from "./pages/SpeakerPage";

export const App = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/speakers" element={<SpeakerPage />} />
        </Routes>
      </HashRouter>
    </AppThemeProvider>
  );
};
