import React from 'react'
// import the Route & Routes component to define which of the components should render depending on the URL.
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Posts from './pages/Posts'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App;

