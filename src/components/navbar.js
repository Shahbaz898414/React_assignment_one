import React from "react";

import "./navbar.css";

import ShoppingCard from "../img/shopping cart counter.png";

import InfinityLogo from "../img/123.png";

const navbar = () => {
  return (
    <div class="Navbar">
      <ul class="menu">
        <li>
          {" "}
          <img src={InfinityLogo} width="38px" class="logo" />
        </li>
        <li class="hover">Swap</li>
        <li class="hover">Rewards</li>
        <li class="hover">Products</li>
        <li class="hover">Launchpad</li>
        <li class="hover">Leaderboard</li>

        {/* <li>Support</li> --> */}
      </ul>
      <div class="icons">
        <ul>
          <li class="up hover">About Us</li>
          <li class="up hover">Support</li>
          <li>
            <button class="connect-button">Connect Wallet</button>
          </li>

          <li class="hover active"> EN</li>

          <li class="long"> </li>


          <li>
           
            <img src={ShoppingCard} alt="Shopping Cart" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;

// <div className='n'></div>
// <nav className='navbar'>
//   <div
//     style={{
//       width:'100%',
//       height:'70px',
//       backgroundSize:'cover',
//       backgroundColor:'#001413',
//       backgroundImage:`url(${require('../img/nav-bag-image.png')})`
//     }}
//    className="navbar-bg">

//   </div>
// </nav>
