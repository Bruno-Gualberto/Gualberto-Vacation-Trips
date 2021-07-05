import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const Info = () => {
  return (
    <div className="bck_naive_blue">
      <div className="center_wrapper">
        <div className="vn_wrapper">

          <Zoom className="vn_item" triggerOnce>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div 
                    className="vn_icon"
                    style={{
                      background: `url(${icon_calendar})`
                    }}
                  ></div>
                  <div className="vn_title">
                    Event Date & Time
                  </div>
                  <div className="vn_desc">
                    September, <br/> the 28th, 2021 <br/> at 12:10pm
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom className="vn_item" delay={500} triggerOnce>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{
                      background: `url(${icon_location})`
                    }}
                    ></div>
                    <div className="vn_title">
                      Where We Meet
                    </div>
                    <div className="vn_desc">
                      Rod. Hélio Smidt, Airport, Guarulhos <br/> SP, Brazil
                    </div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default Info;