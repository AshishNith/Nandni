import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import CustomCursor from './components/CustomCursor'
import Profile from './pages/Profile'
import Preloader from './components/Preloader'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Router>
      <CustomCursor />
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/blog/:id" element={<Blog />} /> */}

          <Route path="/profile" element={<Profile />} />
        </Routes>
      )}
    </Router>
  )
}

export default App
