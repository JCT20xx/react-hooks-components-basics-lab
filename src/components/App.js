import React from "react";
import Heading from "./Heading"

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
     <Heading />    
    </div>
  );
}


const About =() => {
  return (
    <div id="about">
      <h2>About!</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <Home />
      {/* add your <About> component here */}
      <About />
    </div>
  );
}

export default App;
