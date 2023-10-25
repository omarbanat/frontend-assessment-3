import React, { useState } from 'react';

const AddBlog = () => {
    const timestampFlag = true;
    const [createdAt, setCreatedAt] = useState(new Date());
    const [updatedAt, setUpdatedAt] = useState(new Date());
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [body, setBody] = useState('');
    const [publisher, setPublisher] = useState('');


    const handleAddBlog = async () => {
        const blogBody = { createdAt, updatedAt, title, category, body, publisher };

        const response = await fetch('http://localhost:8000/blog/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blogBody),
        });
        console.log(response)
        const data = await response.json();
        console.log(data);
    };

    return (
        <div className="blog-form">
            <h2 className='blog-heading'> Add New Blog </h2>
            <div className='label-form'>
                <label htmlFor="createdAt">Created on:</label>
                <input
                    type="date"
                    name="createdAt"
                    value={createdAt.toISOString().split('T')[0]}
                    onChange={(e) => setCreatedAt(new Date(e.target.value))}
                />
            </div>

            <div className='label-form'>
                <label htmlFor="updatedAt"> Updated on: </label>
                <input
                    type="date"
                    name="updatedAt"
                    value={updatedAt.toISOString().split('T')[0]}
                    onChange={(e) => setUpdatedAt(new Date(e.target.value))}
                />
            </div>

            <div className='label-form'>
                <label> Title: </label>
                <input
                    type="text"
                    placeholder="Enter title here"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className='label-form'>
                <label> Category: </label>
                <input
                    type="text"
                    placeholder="Enter category here"
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>

            <div className='label-form'>
                <label> Body: </label>
                <textarea
                    name="blog-body"
                    cols="30"
                    rows="10"
                    placeholder="Enter body here"
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>

            <div className='label-form'>
                <label> Publisher: </label>
                <input
                    type="text"
                    placeholder="Enter publisher here"
                    onChange={(e) => setPublisher(e.target.value)}
                />
            </div>
            <button onClick={handleAddBlog}> Add Blog </button>
        </div>
    );
};

export default AddBlog;