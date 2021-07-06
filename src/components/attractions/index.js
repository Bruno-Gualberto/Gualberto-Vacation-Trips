import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import MyButton from '../reusable_components/MyButton';

const Attractions = () => {
  
  const attrState = {
    type: ['Quad Biking', 'Paragliding', 'Eco-Park'],
    price: [250, 350, 120],
    description: [
      'Experience a 25km ride along the coast of Porto Seguro riding a quad bike!',
      'Fly for 15min/20min through the skies of Arraial d’Ajuda!', 
      'Joy, adventure, fun and entertainment for you and the whole family in this water park!'
    ],
    link: [
      'https://spark.adobe.com/page/i5yxCXeT8PAGv/',
      'https://spark.adobe.com/page/i5yxCXeT8PAGv/',
      'https://spark.adobe.com/page/i5yxCXeT8PAGv/'
    ],
    delay: [500, 0, 500]
  }

  const renderItems = () => (
    attrState.type.map((item, i) => (
      <Zoom key={i} className="attr_item" delay={attrState.delay[i]} triggerOnce>
        <div className="attr_inner_wrapper">
          <div className="attr_title">
            <span>R${attrState.price[i]}</span>
            <span>{attrState.type[i]}</span>
          </div>
          <div className="attr_description">
            {attrState.description[i]}
          </div>
          <div className="attr_buttons">
            <MyButton
              text="check it out"
              size="big"
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
      <div className="center_wrapper attr_section">
        <h2>Attractions</h2>
        <div className="attr_wrapper">
          {renderItems()}
        </div>
      </div>
    </div>
  )
}

export default Attractions;