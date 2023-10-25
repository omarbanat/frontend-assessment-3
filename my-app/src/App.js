import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom"; // Import Routes
//import About from "./about";
import Blogs from "./components/Blogs";
import axios from "axios";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import "./App.css";
import Footer from "./components/footer";
import HomePage from "./HomePage";
import blogs from "./components/Blogs";
import List from "./List"; // Adjust the path accordingly
import Header from "./components/Header";

function App() {
  const [blogs, setBlogs] = useState([]);
  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Fetch blogs data
    axios.get(`${url}/blog/get`).then((response) => {
      console.log(response.data);
      setBlogs(response.data);
    });
  }, []);

  const handleBlogSubmit = (formData) => {
    axios
      .post(`${url}/api/blog/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for FormData
        },
      })
      .then((response) => {
        axios.get(`${url}/api/blog`).then((response) => {
          setBlogs(response.data);
        });
      })
      .catch((error) => {
        console.error("Error adding blog:", error.message);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      });
  };

  const handleDelete = (itemId, itemType) => {
    axios
      .delete(`${url}/api/${itemType}/${itemId}`)
      .then((response) => {
        if (itemType === "blog") {
          setBlogs((prevBlogs) => prevBlogs.filter((s) => s._id !== itemId));
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };
  const BlogsComponent = () => {
    return (
      <div>
        <Navbar />
        <List
          items={blogs}
          onDelete={(itemId) => handleDelete(itemId, "blogs")}
        />
      </div>
    );
  };

  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path="/dashboard/*" element={<DashboardPage />} />
          <Route path="/Editblogs" element={<BlogsComponent />} />
        </Routes>
      </div>
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
    </Router>
  );
}

function DashboardPage() {
  const [authenticated, setAuthenticated] = useState(false);
}

export default App;
