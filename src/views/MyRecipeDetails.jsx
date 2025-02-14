import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

function MyRecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const foundRecipe = storedRecipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  const handleDelete = () => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    const updatedRecipes = storedRecipes.filter((r) => r.id !== parseInt(id));
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    navigate("/my-recipes");
  };

  const handleEdit = () => {
    navigate(`/edit-recipe/${id}`);
  };

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
    <BackButton />
    <h1>{recipe.title}</h1>
    <p>{recipe.description}</p>
    <div className="buttons-container">
      <button className="edit-button" onClick={() => navigate(`/edit-recipe/${id}`)}>Edit</button>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
  </div>
  );
}

export default MyRecipeDetails;
