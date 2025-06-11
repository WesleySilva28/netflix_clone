import React, { useState } from "react";
import GenreFilter from "../components/GenreFilter";
import MovieRow from "../components/MovieRow";
import AdBanner from "../components/AdBanner";
import movies from "../data/movies";

const genres = ["Todos", "Em alta", "Ação", "Drama", "Fantasia", "Terror", "Crime"];

function Home({ search }) {
  const [currentGenre, setCurrentGenre] = useState("Todos");

  const filteredMovies =
    currentGenre === "Todos"
      ? genres.filter((g) => g !== "Todos").map((genre) => ({
          genre,
          items: movies.filter((movie) =>
            movie.genre.includes(genre) &&
            movie.title.toLowerCase().includes(search.toLowerCase())
          ),
        }))
      : [
          {
            genre: currentGenre,
            items: movies.filter(
              (movie) =>
                movie.genre.includes(currentGenre) &&
                movie.title.toLowerCase().includes(search.toLowerCase())
            ),
          },
        ];

  return (
    <div className="bg-black min-h-screen text-white">
      <GenreFilter currentGenre={currentGenre} setCurrentGenre={setCurrentGenre} />
      <AdBanner />
      {filteredMovies.map(({ genre, items }) => (
        <MovieRow key={genre} title={genre} items={items} />
      ))}
      <AdBanner />
    </div>
  );
}

export default Home;
