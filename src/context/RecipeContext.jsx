import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  // Fetch recipes from the API on initial load
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      setRecipes(response.data.meals || []);
    };
    fetchRecipes();
  }, []);

  // Search recipes by name
  const searchRecipes = async (term) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
    setRecipes(response.data.meals || []);
  };

  // Filter recipes by category
  const filterRecipes = async (category) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    setRecipes(response.data.meals || []);
  };

  // Add a new recipe to the local state
  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [
      ...prevRecipes,
      { ...newRecipe, idMeal: Date.now().toString() }, // Generate a unique ID
    ]);
  };

  // Edit an existing recipe in the local state
  const editRecipe = (id, updatedRecipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.idMeal === id ? { ...recipe, ...updatedRecipe } : recipe
      )
    );
  };

  // Delete a recipe from the local state
  const deleteRecipe = (id) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.idMeal !== id)
    );
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        searchTerm,
        setSearchTerm,
        filter,
        setFilter,
        searchRecipes,
        filterRecipes,
        addRecipe,
        editRecipe,
        deleteRecipe,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;