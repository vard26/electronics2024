import React from 'react'
import { BiSupport } from "react-icons/bi";
import { footerinfo,footerprivacy } from '../../lists';
import { FaTelegramPlane,FaTwitter,FaPinterestP,FaInstagram } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
export default function FooterPrivacy() {
  return (
    <div className='footer_privacy_container' data-aos="zoom-in-down">
      <div className="our_store">
        <h2>Our Store</h2>
        <div className="contact">
          <BiSupport />
          <div className="privacy_info">
            <h2>Get Question ? Contact Us 24/7</h2>
            <span>(+60) 6789 6789 / 6666 8888</span>
            <span>contactus@teckstore.com</span>
          </div>
        </div>
       <div className="contact_info">
       <h2>Contact Info</h2>
        <span>Teck Store - Oxford Street 06 United Kingdom</span>
       </div>
      </div>
      <div className="information">
          <h2>Information</h2>
          {footerinfo.map(info => <span key={info}>{info}</span>)}
      </div>
      <div className="privacy">
          <h2>Our Policy</h2>
         {footerprivacy.map(info => <span key={info}>{info}</span>)}
      </div>
      <div className="newsletter">
          <h2>Join our newsletter</h2>
          <label>
            <input type="text" placeholder='Type your email here'/>
            <div className="tg_icon">
                <FaTelegramPlane />
            </div>
            </label>
            <p>Sign up for our newsletter and get 50% off your next order. Pretty sweet, we know.</p>
            <div className="social_media_icons">
                <BiLogoFacebook />
                <FaTwitter />
                <FaPinterestP />
                <FaInstagram  />
            </div>
      </div>
    </div>
  )
}
