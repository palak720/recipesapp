import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RecipeContext from "../context/RecipeContext";
import "../styles/EditRecipe.css"

const EditRecipe = () => {
  const { id } = useParams();
  const { recipes, editRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    strMeal: "",
    strInstructions: "",
    strMealThumb: "",
  });

  // Find the recipe to edit
  useEffect(() => {
    const recipeToEdit = recipes.find((recipe) => recipe.idMeal === id);
    if (recipeToEdit) {
      setFormData({
        strMeal: recipeToEdit.strMeal,
        strInstructions: recipeToEdit.strInstructions,
        strMealThumb: recipeToEdit.strMealThumb,
      });
    }
  }, [id, recipes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editRecipe(id, formData); // Update the recipe
    navigate("/"); // Redirect to the homepage
  };

  return (
    <div className="edit-recipe">
      <h1>Edit Recipe</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipe;