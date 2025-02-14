import React, { useState, useEffect } from "react";
import { recipes } from "../data"; 
import RecipeCard from "../components/RecipeCard";
import "../index.css";

function Recipes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [isVegetarianFilterActive, setIsVegetarianFilterActive] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  // Filter recipes based on search query and vegetarian filter
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearchQuery = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVegetarianFilter = isVegetarianFilterActive ? recipe.vegetarian : true;
    return matchesSearchQuery && matchesVegetarianFilter;
  });

  // Toggle favorite status
  const handleFavoriteToggle = (recipeId) => {
    let updatedFavorites = [...favorites];
    if (updatedFavorites.includes(recipeId)) {
      updatedFavorites = updatedFavorites.filter(id => id !== recipeId); // Remove from favorites
    } else {
      updatedFavorites.push(recipeId); // Add to favorites
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Save to localStorage
  };

  return (
    <div>
      <h1>Dish Delights Recipes</h1>

      {/* Filters Section */}
      <div className="filters-container">
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        {/* Vegetarian Filter */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={isVegetarianFilterActive}
              onChange={() => setIsVegetarianFilterActive(!isVegetarianFilterActive)}
            />
            Show Vegetarian Only
          </label>
        </div>
      </div>

      <div className="recipe-cards">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            handleFavoriteToggle={handleFavoriteToggle}
            isFavorite={favorites.includes(recipe.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
