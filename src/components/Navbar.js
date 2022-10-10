import React from "react";

const Navbar = () => {
  return (
    <div className="nav-menu">
      <div className="logo">
        <strong>
          <a href="">
            <img src="images/logo.png" alt="Sam Jarvis logo" />
          </a>
        </strong>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#work">PORTFOLIO</a>
          </li>
          <li>
            <a href="#clients">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
