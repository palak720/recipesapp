import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RecipeContext from "../context/RecipeContext";

const RecipeCard = ({ recipe }) => {
  const { deleteRecipe } = useContext(RecipeContext);

  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h3>{recipe.strMeal}</h3>
      </Link>
      <div className="actions">
        <Link to={`/edit-recipe/${recipe.idMeal}`} className="edit-btn">Edit</Link>
        <button onClick={() => deleteRecipe(recipe.idMeal)} className="delete-btn">Delete</button>
</div>

      </div>
  );
};

export default RecipeCard;