import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      className="relative group transition-transform duration-300 transform hover:scale-110 cursor-pointer"
      style={{ minWidth: "150px" }}
      onClick={() => navigate(`/filme/${movie.id}`)}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-auto rounded-md"
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 
                   transition-opacity duration-300 p-2 rounded-md flex flex-col justify-end"
      >
        <h3 className="text-sm font-semibold">{movie.title}</h3>
        <p className="text-xs mt-1">{movie.description?.slice(0, 60)}...</p>
      </div>
    </div>
  );
}

export default MovieCard;
