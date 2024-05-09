import React from 'react';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { aboutswiper } from '../../lists';
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedin,FaEnvelope } from "react-icons/fa";
import ShopAdvertisment from '../shop/ShopAdvertisment';

export default function AboutTeam() {
  return (
    <div className='about_team' data-aos="zoom-in-down">
        <div className="team_container">
        {aboutswiper.map(about => {
                return (
                    <div className="team_item">
                        <img src={about.resourceLocation} alt="" />
                        <h2>{about.displayName}</h2>
                        <span>{about.profession}</span>
                        <div className="about_icons">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaTwitter />
                            <FaLinkedin />
                            <FaEnvelope />
                        </div>
                    </div>
                    )
            })}
        </div>
        <ShopAdvertisment />
    </div>
  )
}