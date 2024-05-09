import React from 'react';
import { homeinfo ,homeinfobox} from '../../lists';
;

export default function HomeInfo() {
  return (
    <div>
        <div className="home_info_container" data-aos="zoom-in-down">
          {homeinfo.map(info =>{
            return  <div className="home_icones" key={info.id}>
                <i>{info.icon}</i>
                <div className="texts">
                  <h2>{info.name}</h2>
                  <h3>{info.content}</h3>
                </div>
            </div>
          })}
          </div>
        <div className="home_info_images" data-aos="zoom-in-down">
        {
            homeinfobox.map(box =>{
              return <div className="images" style={{background:`url(${box.bg}) no-repeat center / cover`}} key={box.id} >
                  <div className="item">
                    <h3>{box.content}</h3>
                    <h2>{box.name}</h2>
                    <a href="#">{box.link}</a>
                  </div>
              </div>
            })
          }
        </div>
    </div>
  )
}
