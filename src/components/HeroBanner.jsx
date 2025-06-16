import React from "react";
import { useNavigate } from "react-router-dom";
import movies from "../data/movies";

function HeroBanner() {
  const movie = movies[Math.floor(Math.random() * movies.length)];
  const navigate = useNavigate();

  return (
    <div
      className="relative h-[600px] md:h-[675px] bg-cover bg-center flex items-end p-4"
      style={{ backgroundImage: `url(${movie.banner || movie.image})` }}
    >
      <div className="bg-black bg-opacity-60 p-4 rounded max-w-lg">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
          {movie.title}
        </h2>
        <p className="text-gray-200 text-sm mb-3">{movie.description}</p>
        <div className="flex gap-3">
          <button
            onClick={() => window.open(movie.trailerUrl, "_blank")}
            className="bg-white text-black px-3 py-1.5 rounded hover:bg-gray-300 text-sm"
          >
            ▶ Assistir agora
          </button>
          <button
            onClick={() => navigate(`/filme/${movie.id}`)}
            className="bg-gray-800 text-white px-3 py-1.5 rounded hover:bg-gray-700 text-sm"
          >
            ℹ Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
