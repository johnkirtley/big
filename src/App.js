import React from 'react';
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <Navigation />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/team">
        <Team />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

    </div>
  );
}

export default App;
