import React, { useState } from "react";

function Filter({ search, onCategoryChange, onSearchChange }) {
  const [searchText, setSearchText] = useState(search || ""); // State for search text

  function handleSearchChange(event) {
    const newSearchText = event.target.value;
    setSearchText(newSearchText); // Update the search text state
    onSearchChange(newSearchText); // Call the callback prop with the new search text
  }

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText} // Connect the input value to the search text state
        onChange={handleSearchChange} // Handle input changes
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
