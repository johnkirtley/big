import React, { useState } from 'react';
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";
import { Route } from "react-router-dom";
import data from "./data";
import './App.css';



function App() {
  const [product] = useState(data);

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
        <Team attr={product} />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

    </div>
  );
}

export default App;
