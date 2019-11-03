import React from 'react';
import './App.css';
import Nav from "./Components/Navigation/Nav"
import AboutMe from "./Components/AboutMe/AboutMe"
import ContactMe from "./Components/ContactMe/ContactMe"
import Portfolio from "./Components/Portfolio/Portfolio"
import Experience from "./Components/Experience/Experience"

function App() {
  return (
    <div className="App container">
      <Nav />
      <AboutMe />
      <Portfolio />
      <Experience />
      <ContactMe />
    </div>
  );
}

export default App;
