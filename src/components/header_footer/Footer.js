import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade triggerOnce delay={500}>
        <div className="font_righteous footer_logo_venue">Gualberto VT</div>
        <div className="footer_copyright">Gualberto Vaccation Trips 2021 all rights reserved</div>
      </Fade>
    </footer>
  )
}

export default Footer; 