import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MyRecipes() {
  const [myRecipes, setMyRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Load saved recipes from localStorage
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setMyRecipes(storedRecipes);
  }, []);

  // Handle Recipe Creation
  const handleAddRecipe = () => {
    if (!title || !description) {
      alert("Please fill in all fields!");
      return;
    }

    const newRecipe = { id: Date.now(), title, description };
    const updatedRecipes = [...myRecipes, newRecipe];

    setMyRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h1>My Recipes</h1>

      {/* Form to Add Recipe */}
      <div className="new-recipe-container">
        <div className="recipe-form">
          <input
            type="text"
            className="recipe-input"
            placeholder="Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="recipe-textarea"
            placeholder="Write your recipe here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="submit-button" onClick={handleAddRecipe}>
            Add Your Own Recipe
          </button>
        </div>
      </div>

      {/* List of User-Created Recipes */}
      {myRecipes.length === 0 ? (
        <p>No recipes yet. Add one above!</p>
      ) : (
        <div className="my-recipes-cards">
          {myRecipes.map((recipe) => (
            <div key={recipe.id} className="my-recipe-card">
              <h2>{recipe.title}</h2>
              <Link to={`/my-recipe/${recipe.id}`}>
                <button>View</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyRecipes;
