import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecipeContext from "../context/RecipeContext";
import "../styles/AddRecipe.css"

const AddRecipe = () => {
  const { addRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    strMeal: "",
    strInstructions: "",
    strMealThumb: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(formData); // Add the new recipe
    navigate("/"); // Redirect to the homepage
  };

  return (
    <div className="add-recipe">
      <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={formData.strMeal}
          onChange={(e) =>
            setFormData({ ...formData, strMeal: e.target.value })
          }
          required
        />
        <textarea
          placeholder="Instructions"
          value={formData.strInstructions}
          onChange={(e) =>
            setFormData({ ...formData, strInstructions: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.strMealThumb}
          onChange={(e) =>
            setFormData({ ...formData, strMealThumb: e.target.value })
          }
          required
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;