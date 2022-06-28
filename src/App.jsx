import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

import { Navbar } from "./components";

import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { RecipesPage } from "./pages/RecipesPage";
import { RandomDrinkPage } from "./pages/RandomDrinkPage";
import { LoginPage } from "./pages/LoginPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar
          pages={["about", "recipes", "random-drink", "log-in"]}
          displayHomeButton={false}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/random-drink" element={<RandomDrinkPage />} />
          <Route path="/log-in" element={<LoginPage />} />
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
