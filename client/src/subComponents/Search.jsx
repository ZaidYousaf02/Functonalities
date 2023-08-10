import React from "react";

function Search({ setSearch }) {
  return (
    <>
      <div className="centralize">
        <div className="input-block">
          <input
            type="search"
            name="input-text"
            id="input-text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="placeholder">Search</span>
        </div>
      </div>
    </>
  );
}

export default Search;
