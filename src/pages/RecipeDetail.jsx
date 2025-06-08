import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import RecipeContext from "../context/RecipeContext";
import "../styles/RecipeDetail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const { deleteRecipe } = useContext(RecipeContext);
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setRecipe(response.data.meals[0]);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-detail">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>{recipe.strInstructions}</p>
      <div className="actions">
        <button onClick={() => navigate(`/edit-recipe/${id}`)}>Edit</button>
        <button onClick={() => { deleteRecipe(id); navigate("/"); }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;