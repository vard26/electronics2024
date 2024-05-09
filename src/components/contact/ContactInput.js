import React from 'react'

export default function ContactInput() {
  return (
    <div className='contact_input' data-aos="zoom-in-down">
      <h2>LEAVE US A MESSAGE</h2>
      <p>- Good for nature, good for you -</p>
      <div className="input_block">
       <div className="first__block">
       <input type="text" placeholder='Your name'/>
        <input type="text" placeholder='Your surname'/>
        <input type="text" placeholder='Email'/>
       </div>
       <div className="second_block">
        <input type="text" placeholder='Message' />
       </div>
      </div>
      <button>Post Comment </button>
    </div>
  )
}
