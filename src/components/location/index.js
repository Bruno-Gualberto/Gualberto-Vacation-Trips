import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58162.62980682895!2d-39.094074727259006!3d-16.435559655633707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73696a94abc86ff%3A0x677df9529c95e80f!2sPorto%20Seguro%2C%20BA%2C%2045810-000%2C%20Brasil!5e0!3m2!1spt-BR!2sde!4v1625473560850!5m2!1spt-BR!2sde" 
        width="100%" 
        height="500px" 
        frameBorder="0"
        title="gglemaps"
        allowFullScreen
      ></iframe>

      <div className="location_tag">
        <div>
          Location
        </div>
      </div>
    </div>
  )
}

export default Location;