function Header({ setSearch }) {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-red-600">NetFakex</h1>
      <input
        type="text"
        placeholder="Buscar filmes ou séries"
        className="bg-gray-800 text-white px-4 py-2 rounded-full w-64 focus:outline-none"
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
}

export default Header;
