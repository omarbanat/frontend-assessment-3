import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogsDisplayPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/http://localhost:3000/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div class="container-all-blogs">
        <div class="nav">
            <p class="blogs">Blogs</p>
            <Link to={'dashboard.html'}><button class="to-dashboard" >Dashboard</button></Link>
        </div>
            {blogs.map(blog => (
            <div key={blog.id} className="blog-card">
                <h2>{blog.title}</h2>
                <p>Author: {blog.author}</p>
                <p>{blog.previewContent}</p>
                <Link to={`/blogs/${blog.id}`}>Read More</Link>
            </div>
            ))}
    </div>
  );
};

export default BlogsDisplayPage;