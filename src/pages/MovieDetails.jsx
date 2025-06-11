import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return (
      <div className="p-6 text-white">
        <h2 className="text-2xl font-bold text-red-500">Filme não encontrado.</h2>
        <Link to="/" className="text-blue-400 underline">Voltar para a home</Link>
      </div>
    );
  }

  return (
    <div className="p-6 text-white flex flex-col lg:flex-row gap-6 bg-black min-h-screen">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full lg:w-1/3 rounded-lg shadow-lg"
      />
      
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>

        <p className="text-gray-400 mb-2">
          Gênero: {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}
        </p>

        {movie.description && (
          <p className="text-base mb-4">{movie.description}</p>
        )}

        {movie.trailerUrl && (
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              src={movie.trailerUrl}
              title="Trailer"
              frameBorder="0"
              allowFullScreen
              className="w-full h-64 lg:h-full rounded-lg"
            />
          </div>
        )}

        <Link
          to="/"
          className="inline-block mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          ← Voltar para a home
        </Link>
      </div>
    </div>
  );
}

export default MovieDetails;
