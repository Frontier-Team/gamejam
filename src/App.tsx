import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { HomePage } from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import { SpeakerPage } from "./pages/SpeakerPage";
import { AppThemeProvider } from "./providers/ThemeProvider";

export const App = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} /> 
  <Route path='/about' element={<AboutPage />} />
          <Route path='/accessibility' element={<AccessibilityPage />} />
          <Route path='/speakers' element={<SpeakerPage />} />
          <Route path='/map' element={<MapPage />} />
        </Routes>
      </HashRouter>
    </AppThemeProvider>
  );
};
