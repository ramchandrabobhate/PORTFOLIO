import React, { useContext } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Intro from "./Components/Intro";
import Productlist from "./Components/Productlist";
import Toggaltheme from "./Components/Toggaltheme";
import { ThemeContext } from "./Context";



function App() {

  const theme=useContext(ThemeContext);
  const darkmode=theme.state.darkMode;
  
  return (
  

    <div style={{backgroundColor:darkmode ? "#222": "white",color:darkmode && "white" }}>
      
      <Toggaltheme/>
     <Intro/>
     <About/>
     <Productlist/>
     <Contact/>
    </div>
  );
}

export default App;
