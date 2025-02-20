import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { HomePage } from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import MapPage from "./pages/MapPage";
import { SpeakerPage } from "./pages/SpeakerPage";
import { AppThemeProvider } from "./providers/ThemeProvider";
import { ConductPage } from './pages/ConductPage';
import { SpeakerPage } from "./pages/SpeakerPage";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { SchedulePage } from "./pages/SchedulePage";

export const App = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/conduct' element={<ConductPage />} />
          <Route path='/schedule' element={<SchedulePage />}/>
          <Route path='/accessibility' element={<AccessibilityPage />} />
          <Route path='/speakers' element={<SpeakerPage />} />
          <Route path='/speakers' element={<SpeakerPage />} />
          <Route path='/map' element={<MapPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </HashRouter>
    </AppThemeProvider>
  );
};
