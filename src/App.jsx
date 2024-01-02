import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Press from './Press'
import Pricing from './Pricing'
import Office from './Office'
import Contact from './Contact'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/press" element={<Press />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/office" element={<Office />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
