import React from "react";
import { Link } from "react-router-dom";

function MovieRow({ title, items }) {
  return (
    <div className="mb-8">
      <h2 className="text-white text-2xl font-bold mb-3 px-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 px-4">
        {items.map((item) => (
          <Link to={`/filme/${item.id}`} key={item.id}>
            <div className="relative w-[150px] flex-shrink-0 transform transition duration-300 hover:scale-110">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg w-full h-[225px] object-cover"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-2">
                <h3 className="text-white text-sm">{item.title}</h3>
                <p className="text-gray-400 text-xs">
  {Array.isArray(item.genre) ? item.genre.join(", ") : item.genre}
</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
