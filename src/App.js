import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Intro from "./Components/Intro";
import Productlist from "./Components/Productlist";
import Toggaltheme from "./Components/Toggaltheme";


function App() {
  return (
    <div className="App">
      <Toggaltheme/>
     <Intro/>
     <About/>
     <Productlist/>
     <Contact/>
    </div>
  );
}

export default App;
