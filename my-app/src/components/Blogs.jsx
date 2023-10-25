import React, { useState, useEffect } from "react";
import axios from "axios";
import "./blogs.css";

const Blogs = () => {
  const [images, setImages] = useState([]);
  const [blogsList, setBlogs] = useState([]);
  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${url}/api/blogs`);
        const blogs = response.data;
        const blogUrls = blogs.map((blog) => blog.image);
        setImages(blogUrls);
        setBlogs(blogs);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <div>
        <h1 className="blogs">Blogs</h1>
      </div>
      <div className="container">
        {blogsList.map((blog, index) => (
          <div className="blog-container" key={index}>
            <div
              className="cont-img"
              style={{
                backgroundImage: `url(${url}/images/${images[index]})`,
                backgroundSize: "cover",
                height: "150px",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="-name">{blog.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
