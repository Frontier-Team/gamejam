import { HashRouter, Route, Routes } from "react-router-dom";
import { AppThemeProvider } from "./providers/ThemeProvider";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { ConductPage } from "./pages/ConductPage";
import { SchedulePage } from "./pages/SchedulePage";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { AboutPage } from "./pages/AboutPage";
import { SpeakerPage } from "./pages/SpeakerPage";
import MapPage from "./pages/MapPage";
import GamePage from "./pages/GamePage";


export const App = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/conduct" element={<ConductPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/speakers" element={<SpeakerPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </HashRouter>
    </AppThemeProvider>
  );
};
