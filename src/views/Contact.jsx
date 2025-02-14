import React from "react";
import MapImage from '../Images/Map.png';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Have any questions or suggestions? Reach out to us!</p>
        <p className="contact-info">
          Email: contact@dishdelights.com<br /> Phone: +123 456 7890</p>
        <p>Or visit us at 456 Culinary Avenue Gourmet Town, 1010 Vienna Austria</p>
     
      <img 
        src={MapImage} 
        alt="Contact map" 
        style={{ width: '350px', height: 'auto', marginTop: '20px' }}
      />
    </div>
  );
}

export default Contact;
