import React from 'react'
import AboutCompany from './AboutCompany';
import './About.css';
import AboutTeam from './AboutTeam';

export default function About() {
  return (
    <div className='about_container'>
        <AboutCompany />
        <AboutTeam />
    </div>
  )
}