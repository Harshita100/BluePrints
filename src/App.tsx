import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Home from "./Home.tsx";
import MediaHub from "./MediaHub.tsx";
import Archive from "./Archive.tsx";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media" element={<MediaHub />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
