import React from 'react'
import FooterPartners from './FooterPartners';
import FooterPrivacy from './FooterPrivacy';
import { footerimages } from '../../lists';

export default function Footer() {
  return (
    <div className="footer_container">
        <FooterPartners />
        <FooterPrivacy />
        <div className="footer_content">
            <p>Copyright 2018 TECK STORE - All Rights Reserved</p>
            <div className="payment_icons">
                {footerimages.map(foot => <img src={foot} key={foot} alt="" />)}
            </div>
        </div>
    </div>
  )
}