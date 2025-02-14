import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Recipe Finder!</h1>
      
      <div className="home-content">
        <div className="home-text">
          <p>
            Welcome to Recipe Finder, your ultimate source for discovering new and exciting recipes. 
            Whether you're looking for quick meals, healthy options, or indulgent treats, we've got you covered.
            Explore thousands of recipes and find your next favorite dish today!
          </p>
          <p>
            Join our community of passionate food lovers, share your own recipes, and make cooking fun!
          </p>
          <Link to="/recipes" className="home-button">Explore Recipes</Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

