import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { homeswiper } from '../../lists';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

export default function HomeSwiper() {
  return (
    <div className='home_swiper_container' data-aos="zoom-in-down">
          <Swiper loop="true" grabCursor="true" modules={[Pagination]} pagination={{clickable : true}}>
              {homeswiper.map(home => {
                  return <SwiperSlide key={home.id}>
                    <div className="home_swiper" style={{background : `url(${home.picture}) no-repeat right / contain`}}>
                        <h4>{home.type}</h4>
                        <h2>{home.name}</h2>
                        <p>{home.content}</p>
                        <span>-Only-</span>
                        <h3>${home.price}</h3>
                        <button>Book Now</button>
                    </div>
                  </SwiperSlide>
              })}
          </Swiper>
    </div>
  )
}
