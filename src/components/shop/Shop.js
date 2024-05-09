import React from 'react'
import ShopCategories from './ShopCategories'
import './Shop.css';
import ShopAdvertisment from './ShopAdvertisment';
import ShopPage from './ShopPage';

export default function Shop() {
  return (
    <div className='shop_container'>
        <ShopCategories />
        <ShopAdvertisment />
        <ShopPage />
    </div>
  )
}