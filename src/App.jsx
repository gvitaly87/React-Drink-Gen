import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

import { Navbar } from "./components";

import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar
          pages={["about", "recipes", "random-drink", "log-in"]}
          displayHomeButton={false}
        />
        <h1>Updated Cocktail Generator</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </>
    </ThemeProvider>
  );
};

export default App;
