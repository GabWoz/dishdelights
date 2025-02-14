import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Recipes from "./views/Recipes";
import RecipeDetails from "./views/RecipeDetails";
import MyRecipes from "./views/MyRecipes";
import MyRecipeDetails from "./views/MyRecipeDetails"; 
import EditRecipe from "./views/EditRecipe";
import Favorites from "./views/Favorites";
import About from "./views/About";
import Contact from "./views/Contact";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <Router basename="/dishdelights">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        <Route path="/my-recipe/:id" element={<MyRecipeDetails />} />
        <Route path="/edit-recipe/:id" element={<EditRecipe />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
