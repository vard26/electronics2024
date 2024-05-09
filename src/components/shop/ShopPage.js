import React, { useContext, useState,useRef } from "react";
import { shoppart } from "../../lists";
import { CiStar } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { FaCircleCheck } from "react-icons/fa6";
import { TbShoppingCartPlus,TbShoppingCartCopy } from "react-icons/tb";
import { IoMdHeart } from "react-icons/io";

export default function ShopPage() {
  const sortContent = [
    "Name, A to Z",
    "Name, Z to A",
    "Price, low to high",
    "Price, high to low",
  ];
  const _ = useContext(Context);
  const sorting = [
    {
      sortBy: () => _.filtered.sort((a, b) => (a.name > b.name ? 1 : -1)),
    },
    {
      sortBy: () => _.filtered.sort((a, b) => (a.name > b.name ? -1 : 1)),
    },
    {
      sortBy: () => _.filtered.sort((a, b) => a.price - b.price),
    },
    {
      sortBy: () => _.filtered.sort((a, b) => b.price - a.price),
    },
  ];
  const [selectvalue, setSelectvalue] = useState("");
  const green_line_Ref = useRef();
  const [showAnim, setShowAnim] = useState(false);
  const selectFiltering = (e) => {
    setSelectvalue(e.target.value);
    sorting[sortContent.indexOf(e.target.value)].sortBy();
  };
 
  return (
    <div className="shop_page">
      <div
        className="add_animation"
        style={{ display: showAnim ? "flex" : "none" }}
      >
        <FaCircleCheck />
        <div className="line">
          <div className="green_line" ref={green_line_Ref}></div>
        </div>
        <p>Product adding in shop cart</p>
      </div>
      <h2>SHOP</h2>
      <div className="filter_bar">
        <p>There are {shoppart.length} products.</p>
        <div className="select_block">
          <p>Sort by:</p>
          <select onChange={(e) => selectFiltering(e)}>
            <option disabled>
              Relevance
            </option>
            {sortContent.map((sort) => {
              return <option key={sort}>{sort}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="shop_products">
        {_.filtered.map((shop, i) => {
          return (
            <div key={shop.picture} className="shop" data-aos="zoom-in-down">
              <img src={shop.picture} alt="" />
              <h4>{shop.name}</h4>
              <div className="stars">
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <div className="price_block">
                <del>£{shop.price + 110}</del>
                <h2>£{shop.price}</h2>
              </div>
              <div className="shop_icons">
                {!_.cart.includes(shop) ? 
                 <TbShoppingCartPlus
                 onClick={(e) => {
                   if (!_.cart.includes(shop)) {
                    setShowAnim(true);
                    green_line_Ref.current.classList.add("greenLineStart");
                     setTimeout(() => {
                      setShowAnim(false);
                      green_line_Ref.current.classList.remove("greenLineStart");
                       _.adding(_.cart, shop, _.setCart);
                       _.scrollToTop();
                       _.setTotal(_.total + shop.price);
                     }, 2500);
                   }
                 }}
               /> :
            <TbShoppingCartCopy style={{color : 'forestgreen'}} />
            }
            {!_.favorite.includes(shop) ? 
                 <IoMdHeartEmpty
                 onClick={(e) => {
                   if (!_.favorite.includes(shop)) {
                      _.adding(_.favorite, shop, _.setFavorite);
                   }
                 }}
               /> :
            <IoMdHeart />
            }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
