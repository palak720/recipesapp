import React, { useContext } from "react";
import RecipeContext from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import SearchFilter from "../components/SearchFilter";
import "../styles/Home.css";

const Home = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="home">
      <SearchFilter />
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;