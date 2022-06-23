import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";

import { HomePage } from "./pages/HomePage";
import { GalleryPage } from "./pages/GalleryPage";

const App = () => {
  return (
    <>
      <NavBar />
      <h1>Updated Cocktail Generator</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </>
  );
};

export default App;
