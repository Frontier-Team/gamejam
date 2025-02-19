import { HashRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { AppThemeProvider } from "./providers/ThemeProvider";
import { SpeakerPage } from "./pages/SpeakerPage";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import { SchedulePage } from "./pages/SchedulePage";

export const App = () => {
  return (
    <AppThemeProvider>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />}/>
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/speakers" element={<SpeakerPage />} />
        </Routes>
      </HashRouter>
    </AppThemeProvider>
  );
};
