import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Amentities from './components/Amentities';
import Plans from './components/Plans';
import Footer from './components/Footer'

function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Amentities />
        <Plans />
        <Footer />
    </div>
  );
}

export default App;
