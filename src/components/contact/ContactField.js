import React from 'react'
import { FaFacebookF,FaInstagram,FaTwitter,FaVimeo} from "react-icons/fa"
export default function ContactField() {
  return (
    <div className='contact_container' data-aos="zoom-in-down">
      <h2>Contact Us</h2>
      <div className="contact_content">
      <div className="left_side">
          <img src="pictures/contact/contact.jpeg" alt="" />
      </div>
      <div className="right_side">
        <h2>GET IN TOUCH</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, sint?.</p>
        <div className="contact_infoo">
          <div className="left">
            <div className="address">
              <h2>Address</h2>
              <p>1800 Abbot Kinney Blvd. Unit D&E</p>
              <p>Venice, CA 90291</p>
            </div>
            <div className="email">
              <h2>Email</h2>
              <p>support@teckstore.com</p>
              <p>contact@teckstore.com</p>
            </div>
          </div>
          <div className="right">
            <div className="phone">
              <h2>Phone</h2>
              <p>Mobile: (+88)-1990-6886</p>
              <p>Hotline: 1800-1102</p>
            </div>
            <div className="social">
              <h2>Social</h2>
              <div className="contact_icons">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaVimeo />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

    </div>
  )
}