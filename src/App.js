import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
// import Home from './components/Pages/Home/Home';

function App() {
  return (
    <>
      <Router>
          <Navbar />
      </Router>
    </>
      
  );
}

export default App;
