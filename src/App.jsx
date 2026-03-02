import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import About from './pages/About';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/Pokedex/*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
 );
}

export default App;
