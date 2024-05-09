import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { bloglist } from '../../lists';
export default function BlogReviews() {
  return (
    <div className='blog_reviews' data-aos="zoom-in-down">
      <h2>The Blog</h2>
      <div className="blog">
        <div className='first_block'>
      {bloglist.map(item =>{
        return <div className="blog_container" data-aos="zoom-in-down" key={item.id}>
                <div className="texts_block">
                    <p>by <span>Dorado Themes</span></p>
                    <p>May 31, 2018 </p>
                    <p>in <span>{item.category}</span></p>
                </div>
                <img src={item.picture} alt="" />
                <div className="blog_content">
                    <h2>{item.content}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non ab unde tempore quia beatae minima molestiae laborum rem provident, itaque in. Tempora officia cumque, molestias accusantium delectus praesentium vitae reiciendis nulla nobis commodi nemo qui! Labore error dolorem impedit.</p>
                    <button>Read More</button>
                    <div className="blog_icons">
                        <span><CiHeart /> 9</span>
                        <span><FaEye/> {item.view}</span>
                        <span><FaFacebookF /> 160</span>
                        <IoShareSocial/>
                    </div>
                </div>
              </div> 
      })}
      </div>
      <div className="blog_items">
        <h2>Popular Posts</h2>
        {bloglist.map(item =>{
          return <div className="blog_itemm" data-aos="zoom-in-down" key={item.id}>
            <div className="img" >
              <img src={item.picture} alt="" />
            </div>
            <div className="texts">
              <span>May 31, 2018</span>
              <p>{item.content}</p>
            </div>
          </div>
        })}
      </div>
      </div>
      
    </div>
  )
}
