import React, { useState, useEffect } from "react";
import { FaWhatsapp } from 'react-icons/fa';
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Button from "react-bootstrap/Button";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState('');

  function handleWhatsAppClick() {
    setShowInput(prevShowInput => !prevShowInput);
  }

  function handleInputChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit() {
    const phone = '9644573559'; // replace with your phone number
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, '_blank');
    setShowInput(false);
    setMessage('');
  }
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
           
        <Button
        className="fork-btn-inner"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '10px',
          borderRadius: '50%',
          width: '3em',
          height: '3em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid green'
        }}
        onClick={handleWhatsAppClick}
      >
        <FaWhatsapp style={{ fontSize: '3em', color: 'green' }} />
      </Button>
      {showInput && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          right: '10px',
          display: 'flex'
        }}>
          <input type="text" value={message} onChange={handleInputChange} style={{ flex: 1 }} />
          <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>Send</button>
        </div>
      )}
            
        <Footer />
      </div>
    </Router>
  );
}

export default App;
