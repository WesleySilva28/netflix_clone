import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Header setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/filme/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
