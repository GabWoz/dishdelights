import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const recipe = recipes.find((r) => r.id === parseInt(id));

    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    } else {
      console.log("Recipe not found!");
    }
  }, [id]);

  const handleSaveChanges = () => {
    if (!title || !description) {
      alert("Please fill in all fields!");
      return;
    }

    const updatedRecipe = { id: parseInt(id), title, description };
    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];


    console.log("Current id:", id);
    console.log("Updated Recipe:", updatedRecipe);

    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === parseInt(id) ? updatedRecipe : recipe
    );

    console.log("Updated Recipes:", updatedRecipes);

    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    navigate("/my-recipes"); 
  };

  return (
    <div>
      <h1>Edit Recipe</h1>

      <div className="new-recipe-container">
        <div className="recipe-form">
          <input
            className="recipe-input"
            type="text"
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
          <button className="submit-button" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditRecipe;


