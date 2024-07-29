import React, { useState, useEffect } from "react";
import "../styles/index.css";

function SearchInput({ searchTerm, HandleSearch }) {
  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search..."
      className="search-input"
      onChange={HandleSearch}
    />
  );
}
export default SearchInput;
