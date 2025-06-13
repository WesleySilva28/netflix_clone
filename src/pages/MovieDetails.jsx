import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "../data/movies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return (
      <div className="text-white p-8">
        <p>Filme não encontrado.</p>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-600 rounded">
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <button onClick={() => navigate(-1)} className="mb-6 px-4 py-2 bg-blue-600 rounded">
        🔙 Voltar
      </button>

      <h1 className="text-3xl font-bold mb-6">{movie.title}</h1>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Pôster do filme com botão abaixo */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-[380px] h-auto rounded-lg shadow-lg"
          />
          <button className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition">
            ▶ Assistir agora
          </button>
        </div>

        {/* Informações + Trailer */}
        <div className="flex-1 w-full">
          <p className="text-sm text-gray-300 mb-2">
            <span className="text-white font-semibold">Gênero: </span>
            {Array.isArray(movie.genre) ? movie.genre.join(", ") : movie.genre}
          </p>

          <p className="mb-6 text-gray-300">{movie.description}</p>

          {movie.trailerUrl ? (
            <div className="w-full max-w-[900px]">
              <iframe
                src={movie.trailerUrl}
                title={`Trailer de ${movie.title}`}
                allowFullScreen
                className="w-full h-[480px] rounded-lg"
              ></iframe>
            </div>
          ) : (
            <p className="text-blue-400">Trailer não disponível.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
