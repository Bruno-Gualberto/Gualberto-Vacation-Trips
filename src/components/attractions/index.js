import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import MyButton from '../reusable_components/MyButton';

const Attractions = () => {
  
  const attrState = {
    type: ['Quad Biking', 'Paragliding', 'Eco-Park'],
    price: [150, 200, 100],
    description: ['description 1', 'description 2', 'description 3'],
    link: ['', '', ''],
    delay: [500, 0, 500]
  }

  const renderItems = () => (
    attrState.type.map((item, i) => (
      <Zoom key={i} className="pricing_item" delay={attrState.delay[i]} triggerOnce>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>{attrState.price[i]}R$</span>
            <span>{attrState.type[i]}</span>
          </div>
          <div className="pricing_description">
            {attrState.description[i]}
          </div>
          <div className="pricing_buttons">
            <MyButton
              text="check it out"
              size="small"
              link={attrState.link[i]}
              style={{
                backgroundColor: '#398a5d'
              }}
            />
          </div>
        </div>
      </Zoom>
    ))
  )

  return (
    <div className="bck_naive_blue">
      <div className="center_wrapper pricing_section">
        <h2>Attractions</h2>
        <div className="pricing_wrapper">
          {renderItems()}
        </div>
      </div>
    </div>
  )
}

export default Attractions;