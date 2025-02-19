import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { AppThemeProvider } from "./providers/ThemeProvider";
import { RulesPage } from "./pages/RulesPage";
import { SpeakerPage } from "./pages/SpeakerPage";
import { RulesPage } from "./pages/RulesPage";

export const App = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/speakers" element={<SpeakerPage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </HashRouter>
    </AppThemeProvider>
  );
};
