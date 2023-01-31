import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

import { UserAllPosts } from './components/UserPost/UserAllPosts';
import { CreatePost } from './components/CreatePost';
import { UpdatePost } from './components/UpdatePost';
import { Home } from './components/Home';


export default function App() {
//lifting the state up to the parent
  const [posts, setPosts] = useState([]);
//this boolean value state will trigger useEffect to update the posts data to the newest data
  const [ updated, setUpdated ] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((res) => {
        console.log(res);
        setPosts(res.data);
      }).catch((err) => console.log(err));
  }, [updated]);

  console.log(posts);

  return (  
        <Routes>        
                <Route path="/" element={<Home posts={posts} setPosts={setPosts} />}></Route>
                <Route path="/myposts" element={<UserAllPosts posts={posts} setPosts={setPosts} updated={updated} setUpdated={setUpdated} />}></Route>
                <Route path="/myposts/create" element={<CreatePost updated={updated} setUpdated={setUpdated} />}></Route>
                <Route path="/myposts/edit/:id" element={<UpdatePost posts={posts} setPosts={setPosts} updated={updated} setUpdated={setUpdated} />}></Route>
        </Routes>
     
  )
}
