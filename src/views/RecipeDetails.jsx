import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { recipes } from "../data";
import BackButton from "../components/BackButton";

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

function RecipeDetails() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

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

  if (!recipe) return <h2>Recipe not found</h2>;


  const recipeImage = imageMap[recipe.image]; 

  return (
    <div>
      <BackButton />

      <div className="recipe-details">
        <h1>{recipe.title}</h1>
        
        <img src={recipeImage} alt={recipe.title} />

        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Instructions:</h3>
        <p>{recipe.instructions}</p>

        <p><strong>Time:</strong> {recipe.time}</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>

        <button
          onClick={() => handleFavoriteToggle(recipe.id)}
          className={`favorite-button recipedetails ${favorites.includes(recipe.id) ? "remove" : "add"}`}
        >
          {favorites.includes(recipe.id) ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default RecipeDetails;
