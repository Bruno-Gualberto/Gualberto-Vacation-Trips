import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';
import slide_four from '../../resources/images/slide_four.jpg';
import slide_five from '../../resources/images/slide_five.jpg';
import slide_six from '../../resources/images/slide_six.jpg';
import slide_seven from '../../resources/images/slide_seven.jpg';
import slide_eight from '../../resources/images/slide_eight.jpg';
import slide_nine from '../../resources/images/slide_nine.jpg';

const Carrousel = () => {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    speed: 500
  }

  return (
    <div
      className="carrousel_wrapper"
      style={{
        // window.innerHeight => so the element has the same height as the window
        height: `${window.innerHeight}px`
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_four})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_five})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_six})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_seven})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_eight})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_nine})`,
              height: `${window.innerHeight}px`
            }}
          ></div>
        </div>
      </Slider>

    </div>
  )
}

export default Carrousel;