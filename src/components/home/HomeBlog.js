import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import { blogposts } from '../../lists';
import { CiCalendarDate } from "react-icons/ci";
import { BiShowAlt } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
export default function HomeBlog() {
  return (
    <div className='home_blog_container' data-aos="zoom-in-down">
        <div className="blog_advert"></div>
        <div className="blog_posts">
            <Swiper slidesPerView={window.innerWidth <= 550 ? 1 : (window.innerWidth <= 992 ? 2 : window.innerWidth >= 1024 ? 4 : 2)} spaceBetween={20} grabCursor="true" modules={[Pagination]} pagination={{clickable : true,dynamicBullets : true,dynamicMainBullets: 1 }}>
                {blogposts.map(blog => {
                    return <SwiperSlide key={blog.id}>
                        <div className="blog_item">
                            <div className="post" style={{background : `url(${blog.picture}) no-repeat center center / cover`}}></div>
                            <h2>{blog.title}</h2>
                            <div className="contact_block">
                                <img src={blog.personPicture} alt="" />
                                <h4>Dorado Themes</h4>
                                <span>
                                    <CiCalendarDate />
                                    <p>May 31, 2018</p>
                                </span>
                                <span>
                                    <BiShowAlt />
                                    <p>{blog.view}</p>
                                </span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis explicabo quaerat quae a doloremque vitae delectus blanditiis quibusdam distinctio eligendi!</p>
                            <div className="more_block">
                                <p>{blog.category}</p>
                                <IoIosArrowRoundForward />
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </div>
  )
}