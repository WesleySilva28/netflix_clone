import React from "react";

const genres = ["Todos", "Em alta", "Ação", "Drama", "Fantasia", "Terror", "Crime"];

function GenreFilter({ currentGenre, setCurrentGenre }) {
  return (
    <div className="flex flex-wrap gap-3 p-4">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => setCurrentGenre(genre)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition 
            ${
              currentGenre === genre
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-red-700 hover:text-white"
            }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
