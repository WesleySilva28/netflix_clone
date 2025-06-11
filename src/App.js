import { useState } from "react";
import Header from "./components/Header";
import MovieRow from "./components/MovieRow";
import AdBanner from "./components/AdBanner";
import movies from "./data/movies";

function App() {
  const [search, setSearch] = useState("");

  // Filtra os filmes com base na busca (sem diferenciar maiúsculas)
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen">
      <Header setSearch={setSearch} />

      {/* Banner de anúncio aparece sempre */}
      <AdBanner />

      {search ? (
        <MovieRow title={`Resultados para "${search}"`} items={filteredMovies} />
      ) : (
        <>
          <MovieRow title="Em alta" items={movies} />
          <MovieRow
            title="Ação"
            items={movies.filter((m) => m.genre === "Ação")}
          />
          <AdBanner />
          <MovieRow
            title="Drama"
            items={movies.filter((m) => m.genre === "Drama")}
          />
          <MovieRow
            title="Fantasia"
            items={movies.filter((m) => m.genre === "Fantasia")}
          />
          <MovieRow
            title="Terror"
            items={movies.filter((m) => m.genre === "Terror")}
          />
          <AdBanner />
        </>
      )}
    </div>
  );
}

export default App;
