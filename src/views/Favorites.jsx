import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css"; 
import { recipes } from "../data";
import RecipeCard from "../components/RecipeCard"; // Import the RecipeCard component

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Handle removal of favorite recipe
  const handleRemoveFavorite = (recipeId) => {
    const updatedFavorites = favorites.filter((id) => id !== recipeId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Update localStorage
  };

  return (
    <div>
      <h1>My Favorite Recipes</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="recipe-cards"> 
          {favorites.map((recipeId) => {
            const recipe = recipes.find((r) => r.id === recipeId);
            return (
              <RecipeCard
                key={recipe.id}
                recipe={recipe} 
                handleFavoriteToggle={handleRemoveFavorite} // Pass remove function as the handler
                isFavorite={true} // Always true because it's in the favorites
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Favorites;