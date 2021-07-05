import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const Info = () => {
  return (
    <div className="bck_naive_blue">
      <div className="center_wrapper">
        <div className="trip_wrapper">

          <Zoom className="trip_item" triggerOnce>
            <div>
              <div className="trip_outer">
                <div className="trip_inner">
                  <div className="trip_icon_square bck_red"></div>
                  <div 
                    className="trip_icon"
                    style={{
                      background: `url(${icon_calendar})`
                    }}
                  ></div>
                  <div className="trip_title">
                    Event Date & Time
                  </div>
                  <div className="trip_desc">
                    September, <br/> the 28th, 2021 <br/> at 12:10pm
                  </div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom className="trip_item" delay={500} triggerOnce>
            <div>
              <div className="trip_outer">
                <div className="trip_inner">
                  <div className="trip_icon_square bck_yellow"></div>
                  <div
                    className="trip_icon"
                    style={{
                      background: `url(${icon_location})`
                    }}
                    ></div>
                    <div className="trip_title">
                      Where We Meet
                    </div>
                    <div className="trip_desc">
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