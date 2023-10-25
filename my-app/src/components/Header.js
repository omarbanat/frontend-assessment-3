// Header.js
import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        <h1 className="Nav">image</h1>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
