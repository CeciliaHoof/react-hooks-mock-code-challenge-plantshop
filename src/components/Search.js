import React from "react";

function Search({ search, query }) {

  function handleChange(e){
    search(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;