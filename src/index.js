import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Destination from './Destination'
import Crew from './Crew'
import Technology from './Technology'
import Home from './Home'
import Navbar from './Navbar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/technology" element={<Technology/>}/>
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
);