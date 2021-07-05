import React from 'react';

import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

  const Featured = () => {
    return (
      <div className="featured_container">
        <Carrousel/>
        <div className="place_name">
          <div className="wrapper">
            Porto Seguro
          </div>
        </div>
        <TimeUntil/>
      </div>
    )
  }

export default Featured;