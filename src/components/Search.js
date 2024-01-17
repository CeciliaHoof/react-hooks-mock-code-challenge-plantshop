import React from "react";

function Search({onSearch, search}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={(e) => (onSearch(e.target.value))}
      />
    </div>
  );
}

export default Search;
