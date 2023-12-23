import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Home from './components/Home';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // This will clear the timer if the component unmounts before the timer finishes
  }, []);

  return (
    
    <Router>
      { isLoading ? (
      <div className="h-screen flex flex-wrap items-center justify-center">
        <div className="content-between">LOADING</div>
      </div>) : (
      <div className="App">
        <div className="bg border-2 border-white"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
      )}
    </Router>
  );
}

export default App;
