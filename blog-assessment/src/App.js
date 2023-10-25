import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Pages/DashBlog';
import AllBlogs from './Components/AllBlogs';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:8000/blog/getAll')
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='Homepage'>
      <div className="Nav-bar">
        <img className="Nav-Image" src="./Logo.PNG" alt="" srcSet="" />
        <p className="Welcome-Nav"> Welcome to Our Blog </p>
        <Link to="/dashboard">
          <img className="Nav-Image" src="./Dashboard.png" alt="" srcSet="" />
        </Link>
      </div>

      <div className="contain">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>

      <p className="Blog-intro">Explore our blog for expert insights and tips on a wide range of topics, from travel and lifestyle to technology and health. Stay informed, inspired, and entertained with our engaging content.</p>
      <div className="Blog-grid">
        {data.map((blog) => (
          <AllBlogs
            key={blog._id}
            createdAt={blog.createdAt}
            updatedAt={blog.updatedAt}
            title={blog.title}
            category={blog.category}
            body={blog.body}
            publisher={blog.publisher}
          />
        ))}
      </div>
    </div >
  );
}

export default App;