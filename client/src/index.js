import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react';

import App from './App';
import './index.css';
import { UserAllPosts } from './components/UserAllPosts';
import { CreatePost } from './components/CreatePost';
import { UpdatePost } from './components/UpdatePost';

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/myposts" element={<UserAllPosts />}></Route>
                <Route path="/myposts/create" element={<CreatePost />}></Route>
                <Route path="/myposts/edit" element={<UpdatePost />}></Route>
            </Routes>
        </BrowserRouter>
  </StrictMode>, 
    document.getElementById('root')
)