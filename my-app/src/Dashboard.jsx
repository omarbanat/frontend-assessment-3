import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // Import Routes

import "./App.css"


const Dashboard = () => {



    return (

            <div>


                <nav >
                    <ul>

                        <li>
                            <Link to="/About">About</Link>
                        </li>
                        <li>
                            <Link to="/EditBlogs">Blogs</Link>
                        </li>
                    </ul>
                </nav>


            </div>


    );
}



export default Dashboard;