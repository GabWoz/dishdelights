import React from "react";
import AboutImage from '../Images/about.jpg';
import MapImage from '../Images/Map.png';

function About() {
  return (
    <div className="about">
      <h1>About Dish Delights</h1>
      <p>
        Dish Delights is a community that brings food lovers together.<br />
        We share a variety of recipes to inspire your next culinary adventure!<br />
        Find it, Try it, Enjoy it!</p>
      <p>Our headquarter is located at 456 Culinary Avenue Gourmet Town, 1010 Vienna Austria</p>
      <img 
          src={AboutImage}
          alt="About image" 
          style={{ width: '350px', height: 'auto' }} 
        />
      <img 
        src={MapImage}
        alt="Contact map" 
        style={{ width: '350px', height: 'auto', marginTop: '20px', marginBottom: '35px' }} 
      />
    </div>
  );
}

export default About;
