import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { footerswiper } from '../../lists';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { footersettings } from '../../lists'

export default function FooterPartners() {
  return (
    <>
      <div className='partners' data-aos="zoom-in-down">
        <Swiper slidesPerView={window.innerWidth <= 550 ? 1 : (window.innerWidth <= 992 ? 2 : 4)} loop="true" modules={[Navigation]} navigation>
            {footerswiper.map(footer => {
              return <SwiperSlide key={footer.id}>
                  <img src={footer.img} alt="" />
              </SwiperSlide>
            })}
        </Swiper>
    </div>
    <div className="footer_settings" data-aos="zoom-in-down">
            {footersettings.map(footer => {
              return <div className='footer_item' key={footer.id}>
                  {footer.icon}
                  <h2>{footer.name}</h2>
                  <p>{footer.content}</p>
              </div>
            })}
        </div>
    </>
  )
}