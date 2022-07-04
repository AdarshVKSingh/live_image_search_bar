import React from "react";
import Navbar from "./Navbar";
import {Routes,Route} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App = ()=>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/about' element = {<About/>}/>
        <Route exact path='/contact' element = {<Contact/>}/>
        <Route  component = {Home}/>
      </Routes>
    </>
  )
}

export default App;

