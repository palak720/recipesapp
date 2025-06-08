import React, { useContext } from "react";
import RecipeContext from "../context/RecipeContext";
import "../styles/SearchFilter.css"

const SearchFilter = () => {
  const { searchTerm, setSearchTerm, filter, setFilter, searchRecipes, filterRecipes } =
    useContext(RecipeContext);

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          searchRecipes(e.target.value);
        }}
      />
      <select
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          filterRecipes(e.target.value);
        }}
      >
        <option value="">All Categories</option>
        <option value="Beef">Beef</option>
        <option value="Chicken">Chicken</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

// Ensure this is the default export
export default SearchFilter;