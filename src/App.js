import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import Info from './components/info';
import About from './components/about';
import Attractions from './components/attractions';
import Location from './components/location';

const App = () => {
  return (
    <div className="App">

      <Header/> 

      <Element name="featured">
        <Featured/>
      </Element>  

      <Element name="tripinfo">  
        <Info/>
      </Element>

      <Element name="aboutportoseguro">
        <About/>
      </Element>  
        
      <Element name="attractions">
        <Attractions/>
      </Element>
        
      <Element name="location">
        <Location/>
      </Element>
        
      <Footer/>
    
    </div>
  );
}

export default App;