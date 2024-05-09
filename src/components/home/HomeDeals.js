import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { homedeal } from "../../lists";
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { TbShoppingCartPlus, TbShoppingCartCopy } from 'react-icons/tb';

export default function HomeDeals() {
  const _ = useContext(Context);
  return (
    <div className="home_deals_container" data-aos="zoom-in-down">
      <span><h2>Top Deals</h2>of the day</span>
      <div className="home_deals_slider">
        <Swiper slidesPerView={window.innerWidth <= 550 ? 1 : (window.innerWidth <= 992 ? 2 : window.innerWidth >= 1024 ? 4 : 2)} loop="true" modules={[Pagination]} pagination={{clickable : true,dynamicBullets : true, dynamicMainBullets: 1}} spaceBetween={20}>
          {homedeal.map((deal,i) => {
            return <SwiperSlide key={deal.id}>
              <div className="home_deal">
                  <div className="home_deal_img" style={{background : `url(${deal.pictures[0]}) no-repeat center center / cover`}} onMouseOver={(e) => e.target.style.background = `url(${deal.pictures[2]}) no-repeat center center / cover`} onMouseOut={(e) => e.target.style.background = `url(${deal.pictures[0]}) no-repeat center center / cover`}></div>
                  <h2>{deal.name}</h2>
                  <div className="price_list">
                      <del>£{deal.price * 165 / 100}</del>
                      <h2>£{deal.price}</h2>
                  </div>
                  <div className="icons_block">
                      <Link to={`/${deal.name.replace(/\s/g, '-')}`} onClick={() => {
                          _.setSingleIndex(i);
                          localStorage.setItem('single', i);
                          _.scrollToTop();
                      }}><IoSearch /></Link>
                      {
                        !_.cart.includes(deal) ? 
                        <TbShoppingCartPlus onClick={() => {
                          if(!_.cart.includes(deal)) {
                            _.adding(_.cart, deal, _.setCart);
                            _.setTotal(_.total + deal.price);
                            window.scrollTo({ top : 0, behavior : 'smooth'});
                          }
                        }}/> :
                        <TbShoppingCartCopy style={{color : 'forestgreen'}} />
                      }
                      <IoMdHeartEmpty style={{color : !_.favorite.includes(deal) ? null : 'forestgreen'}} onClick={() => {
                          if(!_.favorite.includes(deal)) {
                              _.adding(_.favorite, deal, _.setFavorite);
                              window.scrollTo({ top : 0, behavior : 'smooth'});
                          }
                      }}/>
                  </div>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
      <div className="digital">
        <div className="content">
          <h2>Found Your <span> Dream Digital </span> Why Wait ?</h2>
          <p>Get it now with a 0% finance deal from Teckstore Electronics..</p>
        </div>
        <div className="digital_buttons">
          <button>DISCOVER</button>
          <button className="purchase">PURCHASE</button>
        </div>
      </div>
    </div>
  );
}