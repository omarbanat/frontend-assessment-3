import React, { useState } from 'react';
import Blogs from './blogs';
function MenuAndContent() {
    const [activePage, setActivePage] = useState('blogs'); // Initial active page

    const handleMenuClick = (page) => {
        setActivePage(page);
    };

    return (
        <div className="menu-and-content">
            <div className="menu">
                <div className="menu-content">
                    <div className="menu-item">
                        <a href="#Blogs" onClick={() => handleMenuClick('blogs')}>Blogs</a>
                    </div>
                    <div className="menu-item">
                        <a href="#Add " onClick={() => handleMenuClick('add blogs')}>ADD</a>
                    </div>
                    <div className="menu-item">
                        <a href="#Delete" onClick={() => handleMenuClick('delete blogs')}>Delete</a>
                    </div>
                   
                </div>
            </div>
            <div id="content" style={{ flex: 1, paddingLeft: '20px' }}>
                <h2>Welcome to our boutique!</h2>
                {activePage === 'Add blogs' && <Add />}
                {activePage === 'Delete blogs' && < Delete />}
                {activePage === 'Update blogs' && <Update />}

            </div>
        </div>
    );
}

export default MenuAndContent;