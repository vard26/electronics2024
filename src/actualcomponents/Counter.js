import React, { useContext } from 'react'
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { Context } from '../Context';

export default function Counter({ item }) {
  const _ = useContext(Context);

  return (
    <div className='counter'>
        <div className="increment" onClick={() => {
            if(item.quanity <= 1) {
                item.quanity = 1
            }
            else {
                _.setCount(item.quanity -= 1);
                _.setTotal(_.total - item.price);
            }
        }}>
            <IoIosArrowDown />
        </div>
        <span>{item.quanity}</span>
        <div className="decrement" onClick={() => {
            _.setCount(item.quanity += 1);
            _.setTotal(_.total + item.price);
        }}>
            <IoIosArrowUp />
        </div>
    </div>
  )
}