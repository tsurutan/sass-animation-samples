import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "HomePage";
import { CardPage } from "CardPage";
import { ThreeDimensionsPage } from "ThreeDimensionsPage";
import { SwiperPage } from "SwiperPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card" element={<CardPage />} />
      <Route path="/3d" element={<ThreeDimensionsPage />} />
      <Route path="/swiper" element={<SwiperPage />} />
    </Routes>
  );
}

export default App;
