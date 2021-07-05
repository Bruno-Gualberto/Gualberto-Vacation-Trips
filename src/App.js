import React from 'react';
import './resources/styles.css';

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
      <Featured/>
      <Info/>
      <About/>
      <Attractions/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;