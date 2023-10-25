import React from "react";

import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Blogs from "./components/Blogs";
//import Header from './components/Header';
import Dashboard from "./Dashboard";
import "./components/header.css";
import DashboardIcon from "./blog_icon.png";
import Footer from "./components/footer";

const HomePage = () => {
  return (
    <div>
      {/* <nav className="container">
        <div className="dashboard-icon-container">
          <Link to="/dashboard">
            <DashboardIcon sx={{ fontSize: 50 }} />
          </Link>
        </div>
         <ul className="navbar-links">
          <li>
            <HashLink to="#textImageSection" smooth={true} duration={500}>
              About
            </HashLink>
          </li>
          <li>
            <HashLink to="#experience" smooth={true} duration={500}>
              Experience
            </HashLink>
          </li>
          <li>
            <HashLink to="#projects" smooth={true} duration={500}>
              Projects
            </HashLink>
          </li>
          <li>
            <HashLink to="#skills" smooth={true} duration={500}>
              Skills
            </HashLink>
          </li>
        </ul>
      </nav>  */}

      <section id="textImageSection">
      </section>
      <section id="blogs">
        <Blogs />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
