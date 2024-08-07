import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import DataStructuresPage from "./DataStructuresPage";
import BinarySearchVisualizer from "./BinarySearchVisualizer";
import BruteForceVisualizer from "./BruteForceVisualizer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/data-structures" element={<DataStructuresPage />} />
        <Route path="/brute-force" element={<BruteForceVisualizer />} />
        <Route path="/binary-search" element={<BinarySearchVisualizer />} />
      </Routes>
    </Router>
  );
};

export default App;
