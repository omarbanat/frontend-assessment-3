import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const url = 'Your API URL'; // Replace with your API URL

  useEffect(() => {
    // Fetch blog data
    axios.get(`${url}/blog/get`).then((response) => {
      setBlogs(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
