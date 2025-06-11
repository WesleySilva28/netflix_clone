import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/filme/${movie.id}`}>
      <div className="min-w-[180px] bg-gray-800 rounded-md overflow-hidden cursor-pointer hover:scale-105 hover:z-10 transform transition duration-300 ease-in-out shadow-lg">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-60 object-cover"
        />
        <div className="p-2">
          <h3 className="text-sm font-semibold">{movie.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
