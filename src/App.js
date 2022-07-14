import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MovieDetail from "./Components/MovieDetail/MovieDetail";

function App() {
  const [search, setSearch] = useState('');
  return (
    <div>
      <NavBar value={search} setValue= {setSearch} />
      <Routes>
        <Route path="/" element={<Home search = {search} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
