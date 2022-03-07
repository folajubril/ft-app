import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import Lead from './Components/Lead'
import Services from './Components/Services'
import Footer from './Components/Footer';
import './style.css'
function App() {
  return (

    <ParallaxProvider>
      <Lead/>
      <Services/>
      <Footer/>
    </ParallaxProvider>
  );
}

export default App;
