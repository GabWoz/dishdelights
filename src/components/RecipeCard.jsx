import React from "react";
import { Link } from "react-router-dom";

import Stir from "../Images/Stir.jpg";
import Chicken from "../Images/Chicken.jpg";
import Pizza from "../Images/Pizza.jpg";
import Salmon from "../Images/Salmon.jpg";
import Spaghetti from "../Images/Spaghetti.jpg";
import Tacos from "../Images/Tacos.jpg";

const imageMap = {
  "Stir.jpg": Stir,
  "Chicken.jpg": Chicken,
  "Pizza.jpg": Pizza,
  "Salmon.jpg": Salmon,
  "Spaghetti.jpg": Spaghetti,
  "Tacos.jpg": Tacos,
};

function RecipeCard({ recipe, handleFavoriteToggle, isFavorite }) {
  const recipeImage = imageMap[recipe.image];

  return (
    <div className="recipe-card">
      <img src={recipeImage} alt={recipe.title} />
      <h2>{recipe.title}</h2>
      <Link to={`/recipe/${recipe.id}`} className="view-button">View</Link>
      <button
        onClick={() => handleFavoriteToggle(recipe.id)}
        className={`favorite-button ${isFavorite ? "remove" : "add"}`} // Conditional class
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default RecipeCard;

