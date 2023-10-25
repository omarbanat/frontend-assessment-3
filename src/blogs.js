import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css'
import outfit1 from "./outfit1.jpg";
import  outfit2 from "./outfit2.jpg";
import outfit3 from "./outfit3.jpg";
import outfit4 from "./outfit4.jpg";

function blogs() {
  return (  
    <div>
      <h1 className="titre1"> Fashion blogs</h1>
      <p className="sous">
        What is a title slide? 
      </p>
      <div className="blog-images">
        <div className="B1">
          <img
            className="blog-image1"
            src={outfit1}     
                   alt="images"
          />
          <div className="blog1">
            <p>The standard Lorem Ipsum</p>
          </div>
        </div>
        <div className="B2">
          <img
            className="blog-image2"
            src={outfit2}
            alt="images"
          />
          <div className="blog2">
            <p>The standard Lorem</p>
          </div>
        </div>
        <div className="B3">
          <img
            className="blog-image3"
            src={outfit4}
            alt="images"
          />
          <div className="blog3">
            <p>The standard Lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogs;






