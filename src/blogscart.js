import React, { useState,useEffect } from 'react';
const BlogPost = () => {
    const[data,setData] =useState({});
    useEffect(() =>{
      async function fetchData() {
       try{
       const response=await fetch('http://localhost:8000/blog/getAll');
       if (response.ok) {
        const result=await response.json();
        if (result.data && result.data.length>0){setData(result.data [0])}
       }
       else{
        console.error('error');
       }

       } catch (error){
        console.error ('error fetching data',error);
       }
       
      }
      fetchData();
    },[]);

    return (
      <div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
        <p>{data.publisher}</p>
        <p>{data.category}</p>
        <p>{data.keyword}</p>
        </div>

    );
  };

export default BlogPost;

