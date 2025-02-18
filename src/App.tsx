import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import { AppThemeProvider } from "./providers/ThemeProvider";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter basename="/gamejam">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
