import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Reports from './pages/Reports';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    
      <Router>
        <div>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/reports' element={<Reports />} />
        </Routes>
        </div>
      </Router>
  
  );
}

export default App;
