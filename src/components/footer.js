import React from "react";

import certik from "../img/CERTIK.png"

import logos from '../img/3-logo.png' 

import './footer.css'

const footer = () => {
  return (
    <div className="footer-container">
      <div class="nav_first">
        <div class="line"></div>
        <nav className="footer">
          <div className="nav-bar">
             <img src={certik} width="150px" alt=""/>  
          </div>

          <div class="nav_country">
             <img src={logos}  height="50" alt="Location"/>
         </div>
        </nav>
      </div>
    </div>
  );
};

export default footer;
