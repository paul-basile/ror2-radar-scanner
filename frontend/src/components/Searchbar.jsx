function Searchbar({ searchQuery, setSearchQuery }) {
  const handleSearch = (e) => {                             /* prevents the default state from appearing */
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Search for items..."
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}    /* onChange, we get e which is the change, then we get e.target.value and set state equal to that */
      />

      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default Searchbar;