import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import Services from './components/Pages/Services/Services';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Products from './components/Pages/Products/Products';
import SignUp from './components/Pages/SignUp/SignUp';
import Marketing from './components/Pages/Marketing/Marketing';
import Consulting from './components/Pages/Consulting/Consulting';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact-us">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/sign-up">
            <SignUp></SignUp>
          </Route>
          <Route path="/marketing">
            <Marketing></Marketing>
          </Route>
          <Route path="/consulting">
            <Consulting></Consulting>
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
