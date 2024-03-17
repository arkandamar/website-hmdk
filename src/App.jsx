import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Mission from "./components/Mission";
import Birdep from "./components/Birdep";
import Event from "./components/Event";
import "./App.scss";

function App() {
  return (
    <div className="main-container">
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Mission></Mission>
      <Event></Event>
      <Team></Team>
      <Birdep></Birdep>
    </div>
  );
}

export default App;
