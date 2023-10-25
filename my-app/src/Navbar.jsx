import React from 'react'
import {  Link } from 'react-router-dom'; // Import Routes

const Navbar = () => {
    return (
        <div>
            <nav >
                <ul>

                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Editblogs">Blogs</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar