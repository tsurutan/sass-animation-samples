import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "HomePage";
import { CardPage } from "CardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/card" element={<CardPage />} />
    </Routes>
  );
}

export default App;
