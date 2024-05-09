import React, { useContext, useState }  from 'react'
import { Context } from '../Context'
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { PiGridFourFill } from "react-icons/pi";
import { TbShoppingCartPlus, TbShoppingCartCopy } from 'react-icons/tb';

export default function Favorite() {
  const [item,setItem]=useState(false);
  const _ = useContext(Context);
  return (
    <div className='favorite'>
    <div className="grid_icons">
    <BsFillGrid3X2GapFill onClick={()=>{
       if(item == true){
        setItem(false)
      }
    }}/>
    <PiGridFourFill onClick={()=>{
      if(item == false){
        setItem(true)
      }
    }}/>
    </div>
        <h2>Favorite Products</h2>
        <span>Product count {_.favorite.length} elements.</span>
        <div className="favorite_container" style={{gridTemplateColumns: item ? 'repeat(2,1fr)' :'repeat(4,1fr)', gridGap: item ?"90px" : "40px"}}>
          {_.favorite.map(fav =>{
            return <div className="fav_item" data-aos="zoom-in-down" style={{width : item ? '400px': '300px'}} key={fav.picture}>
              <img src={fav.picture} alt="" />
              <h3>{fav.name}</h3>
              <p>£{fav.price}</p>
              {
                !_.cart.includes(fav) ? 
                <TbShoppingCartPlus onClick={() => {
                  if(!_.cart.includes(fav)) {
                    _.adding(_.cart, fav, _.setCart);
                    _.setTotal(_.total + fav.price);
                  }
                }}/> :
                <TbShoppingCartCopy style={{color : 'forestgreen'}} />
              }
              <span onClick={() => {
                _.removeing(_.favorite, fav.id, _.setFavorite);
              }}>x</span>
            </div>
          })}
        </div>
    </div>
  )
}