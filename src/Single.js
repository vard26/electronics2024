import { useContext, useState } from "react";
import { Context } from "./Context";
import { homedeal, singleicons } from "./lists";
import { FaRegHeart } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import Counter from "./actualcomponents/Counter";
import SingleAdvert from "./SingleAdvert";

export default function Single() {
    const _ = useContext(Context);
    const [actualPic, setActualPic] = useState(0);
  return (
   <>
       <div className="single_container" data-aos="zoom-in-down">
        <div className="leftside" data-aos="zoom-in-down">
          <img src={homedeal[_.singleIndex].pictures[actualPic]} alt="" />
          <FaRegHeart style={{color : !_.favorite.includes(homedeal[_.singleIndex]) ? null : 'forestgreen'}} onClick={() => {
             if(!_.favorite.includes(homedeal[_.singleIndex])) {
              _.adding(_.favorite, homedeal[_.singleIndex], _.setFavorite);
          }
          }}/>
          <div className="single_slide" data-aos="zoom-in-down">
              {homedeal[_.singleIndex].pictures.map((single,i) => {
                return <img src={single} alt="" key={single} onClick={() => {
                    setActualPic(i);
                }}/>
              })}
          </div>
        </div>
        <div className="rightside" data-aos="zoom-in-down">
        <h2>{homedeal[_.singleIndex].name}</h2>
        <div className="stars">
          <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
        </div>
        <div className="percent">-35%</div>
        <div className="prices">
            <del>£{homedeal[_.singleIndex].price * 165 / 100}</del>
            <span>£{homedeal[_.singleIndex].price}</span>
        </div>
        <ul>
          <li>Android 4.4.2 OS + MTK6572 Dual Core 598.0~1203.0MHz + 512MB RAM + 4GB ROM</li>
          <li>6″ capacitive touch screen + 540 x 960 screen resolution</li>
          <li>Dual camera, 0.3front camera and rear camera supports up to 5MP photo output with flashlight</li>
          <li>Support 480P video recording, Support TF card up to 32GB, Support proximity sensor, G-sensor</li>
        </ul>
        <div className="counter_block" data-aos="zoom-in-down">
          <button onClick={() => {
              if(!_.cart.includes(homedeal[_.singleIndex])) {
                  _.adding(_.cart, homedeal[_.singleIndex], _.setCart);
              }
          }}>{!_.cart.includes(homedeal[_.singleIndex]) ? 'Add To Cart' : 'Added'}</button>
        </div>
        <div className="app_share">
          {singleicons.map(app => <div key={app.id}>{app.icon}{app.content}</div>)}
        </div>
        </div>
        </div>
        <SingleAdvert />
   </>
  )
}