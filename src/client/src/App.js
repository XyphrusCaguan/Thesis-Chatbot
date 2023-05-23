import React from 'react';
import Home from './components/pages/Home';
import Navbar from './components/inc/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/inc/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';


function App() {

  return (

  <Router>

  <div>
  <Navbar/>
  <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  </Routes>
 <Footer/>
   </div>

  </Router>
  

  );
}

export default App;
