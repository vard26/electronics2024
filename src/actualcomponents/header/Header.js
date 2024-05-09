import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";
import { IoMdHeartEmpty } from "react-icons/io";
import { Context } from '../../Context';
import { categories } from '../../lists';

export default function Header() {
const _ = useContext(Context);
const [openDrop,setOpenDrop] = useState(false);

  return (
    <header>
        <Link to='/'><img src="http://teckstore.doradothemes.com/img/teck-store-logo-1530499473.jpg" alt="" /></Link>
        <label>
            <input type="text" placeholder='Type your search here...'/>
            <div className="all_category">
                <p onClick={() => setOpenDrop(!openDrop)}>All Category</p>
                <IoMdArrowDropdown style={{transform : openDrop ? 'scale(1,-1)' : 'scale(1)'}}/>
                <ul className="dropdown" style={{clipPath : openDrop ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 0, 0 0)'}}>
                    {categories.map(category => {
                        return <Link key={category.id} to='/Shop' onClick={() => {
                            _.filtering(category.name);
                            window.scrollTo({top : 800, behavior : 'smooth'});
                            setOpenDrop(false);
                        }}><li>{category.name}</li></Link>
                    })}
                </ul>
            </div>
            <div className="search_icon">
                <FaSearch />
            </div>
        </label>
        <div className="home_icons">
                <label>
                    <Link to='/Favorite'><IoMdHeartEmpty /></Link>
                    <span>{_.favorite.length}</span>
                </label>
                <label>
                    <Link to="/Cart"><PiShoppingCart /></Link>
                    <span>{_.cart.length}</span>
                </label>
        </div>
    </header>
  )
}