import React, { useState } from 'react';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [publisher, setPublisher] = useState('');
  const [date, setDate] = useState('');
  const [keyword, setKeyword] = useState('');
  const [body, setBody] = useState('');


  const handleAddBlog = async () => {
    const blogBody = { title, publisher, date, keyword, body };

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
      <input
        type="text"
        placeholder="Enter title here"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter publisher here"
        onChange={(e) => setPublisher(e.target.value)}
      />
      <input
        type="date"
        placeholder="Enter date here"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter keyword here"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <textarea
        name="blog-body"
        cols="30"
        rows="10"
        placeholder="Enter body here"
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button onClick={handleAddBlog}>Add Blog</button>
    </div>
  );
};

export default AddBlog;