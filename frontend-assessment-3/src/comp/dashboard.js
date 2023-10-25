
import React, { useEffect, useState } from 'react';

const BlogDashboardPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({ title: '', author: '', content: '' });

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

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await fetch('/http://localhost:3000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      fetchBlogs();
      setFormData({ title: '', author: '', content: '' });
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };

  const handleDelete = async blogId => {
    try {
      await fetch(`/http://localhost:3000/blogs/${blogId}`, {
        method: 'DELETE',
      });
      fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div>
      <h1>Blog Dashboard</h1>
      <div className="dashboard-section">
        <h2>Add Blog</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            placeholder="Content"
            value={formData.content}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="dashboard-section">
        <h2>Manage Blogs</h2>
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>Author: {blog.author}</p>
              <button onClick={() => handleDelete(blog.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDashboardPage;