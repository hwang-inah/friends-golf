import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Pros from './pages/Pros.jsx'
import Products from './pages/Products.jsx'
import Notice from './pages/Board/Notice.jsx'
import Event from './pages/Board/Event.jsx'
import EventDetail from './pages/Board/EventDetail.jsx'
import Gallery from './pages/Gallery.jsx'
import Location from './pages/Location.jsx'


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="pros" element={<Pros />} />
            <Route path="products" element={<Products />} />
            <Route path="notice" element={<Notice />} />
            <Route path="event" element={<Event />} />
            <Route path="event/:id" element={<EventDetail />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="location" element={<Location />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App