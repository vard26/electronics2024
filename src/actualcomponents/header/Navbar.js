import React, { useContext } from 'react'
import { IoFilter } from "react-icons/io5";
import { navbar } from '../../lists';
import { NavLink } from 'react-router-dom';
import { CiDeliveryTruck } from "react-icons/ci";
import { Context } from '../../Context';
export default function Navbar() {
  const _ = useContext(Context);
  return (
    <nav>
        <div className="all_departments">
            <IoFilter />
            <p>ALL DEPARTMENTS</p>
        </div>
        <div className="navbar">
          <ul>
            <li onClick={() => _.setLoader(!_.loader)}><NavLink to='/'>Home</NavLink></li>
            {navbar.map(nav => {
                return <li onClick={() => _.setLoader(!_.loader)} key={nav}><NavLink to={`/${nav}`}>{nav}</NavLink></li>
            })}
          </ul>
          <div className="delivery">
              <CiDeliveryTruck />
              <p>Free Shipping on Orders $80+</p>
          </div>
        </div>
    </nav>
  )
}
