import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import { categories } from "../../lists";
import { Context } from "../../Context";

export default function ShopCategories() {
  const _ = useContext(Context);

  return <div className="shop_categories" data-aos="zoom-in-down">
      <Swiper slidesPerView={window.innerWidth <= 550 ? 1 : (window.innerWidth <= 992 ? 2 : window.innerWidth >= 1024 ? 4 : 2)} spaceBetween={20} loop="true" grabCursor="true" modules={[Navigation]} navigation>
          {categories.map(category => {
              return <SwiperSlide key={category.id}>
                  <div className="category_item" onClick={() => {
                      _.filtering(category.name)
                  }}>
                    <div className="category_picture" style={{background : `url(${category.picture}) no-repeat center center / 75%`}}></div>
                    <h2>{category.name}</h2>
                  </div>
              </SwiperSlide>
          })}
      </Swiper>
  </div>;
}