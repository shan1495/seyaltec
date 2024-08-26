import logo from './logo.svg';

import React from "react";
import Navbar from "./components/Navbar";
import './App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import Contact from "./pages/contact";
import Client from "./pages/clients";
import Services from "./pages/services";
import Industries  from './pages/industries';
import Footer from './pages/foot';


//register();

function App() {
 
  return (
    <div>
        
    <Router>
    <Navbar />
    <Routes>
        <Route path="/" element={<Industries />} />
        <Route path="/home" element={<Industries />} />
        <Route path="/about" element={<About />} />
        <Route
            path="/contact"
            element={<Contact />}
        />
        <Route
            path="/industries"
            element={<Industries />}
        />
        <Route
            path="/services"
            element={<Services />}
        />
        <Route path="/clients" element={<Client />} />
        
    </Routes>
</Router>
<Footer/>
</div>
  );
}

export default App;
