import React from 'react'
import './Home.css';
import HomeSwiper from './HomeSwiper';
import HomeInfo from './HomeInfo';
import HomeDeals from './HomeDeals';
import HomeBlog from './HomeBlog';

export default function Home() {
  return (
    <div className='home_container'>
        <HomeSwiper />
        <HomeInfo />
        <HomeBlog />
        <HomeDeals />
    </div>
  )
}