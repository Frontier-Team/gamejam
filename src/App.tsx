import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { AppThemeProvider } from "./providers/ThemeProvider";
import { RulesPage } from "./pages/RulesPage";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter basename="/gamejam">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
