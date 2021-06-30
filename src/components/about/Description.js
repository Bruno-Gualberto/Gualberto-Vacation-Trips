import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Description = () => {
  return (
    <Fade triggerOnce>
      <div className="center_wrapper">
        <h2>About Porto Seguro</h2>
        <div className="highlight_description">
          Porto Seguro is a coastal resort in the Brazilian state of Bahia. It has approximately 90 kilometers of tropical beaches. The city has an extensive coastline of beaches of fine white sand. The municipality's coastline is divided into a north and south coastline by the mouth of the Buranhém river, a river that is about five hundred meters wide at the mouth. Porto Seguro is also known for its vibrant nightlife, centered on the bar-filled promenade, "Passarela do Álcool". During the height of Carnaval, artists in extravagant costumes and parades of samba musicians help create a world-class street party.
        </div>
      </div>
    </Fade>
  )
}

export default Description;