import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Footer from './footer'; 
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Rentals from './Rentals';
import CompareAll from './CompareAll';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <main>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/Product1" element={<Product1/>} />
      <Route path="/Product2" element={<Product2/>} />
      <Route path="/Product3" element={<Product3/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/Rentals" element={<Rentals/>} />
      <Route path="/CompareAll" element={<CompareAll/>} />
      </Routes>
      </main>

    </div>
    <Footer/>
    </Router>
  );
}

export default App;
