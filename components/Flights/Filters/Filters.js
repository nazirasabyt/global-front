import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Filters = () => {
  const [show, setShow] = useState(true);
  return (
    <div className='hidden lg:flex flex-col justify-start w-[343px] ml-2'>
      <h1 className='mb-8 text-xl font-semibold'>Filters</h1>
      <div className='flex flex-col divide-y gap-8'>
        <div>
          {" "}
          <div className='flex justify-between '>
            <h3 className='mb-4 text-md font-semibold'>Price</h3>
            <MdOutlineKeyboardArrowDown className='cursor-pointer' />
          </div>
          {show && (
            <>
              <div className='flex justify-between  mb-2 relative'>
                <span className='w-6 h-6 bg-brand-clr rounded-full cursor-pointer'></span>
                <div className='border-b-2 border-gray-primary  w-[295px] absolute left-6 top-3'></div>
                <span className='w-6 h-6 bg-brand-clr rounded-full cursor-pointer'></span>
              </div>
              <div className='flex justify-between'>
                <p>$50</p>
                <p>$1200</p>
              </div>
            </>
          )}
        </div>
        <div>
          {" "}
          <div className='flex justify-between mt-8'>
            <h3 className='mb-4 text-md font-semibold'>Departure Time</h3>
            <MdOutlineKeyboardArrowDown className='cursor-pointer' />
          </div>
          {show && (
            <>
              {" "}
              <div className='flex justify-between  mb-2 relative'>
                <span className='w-6 h-6 bg-brand-clr rounded-full cursor-pointer'></span>
                <div className='border-b-2 border-gray-primary  w-[295px] absolute left-6 top-3'></div>
                <span className='w-6 h-6 bg-brand-clr rounded-full cursor-pointer'></span>
              </div>
              <div className='flex justify-between'>
                <p>12:00am</p>
                <p>11:56pm</p>
              </div>
            </>
          )}
        </div>
        <div>
          <div className='flex justify-between mt-8'>
            <h3 className='mb-4 text-md font-semibold'>Rating</h3>
            <MdOutlineKeyboardArrowDown className='cursor-pointer' />
          </div>
          {show && (
            <div className='flex gap-4'>
              <button className='w-10 h-8 border border-brand-clr rounded-md text-sm cursor-pointer'>
                0+
              </button>
              <button className='w-10 h-8 border border-brand-clr rounded-md text-sm cursor-pointer'>
                1+
              </button>
              <button className='w-10 h-8 border border-brand-clr rounded-md text-sm cursor-pointer'>
                2+
              </button>
              <button className='w-10 h-8 border border-brand-clr rounded-md text-sm cursor-pointer'>
                3+
              </button>
              <button className='w-10 h-8 border border-brand-clr rounded-md text-sm cursor-pointer'>
                4+
              </button>
            </div>
          )}
        </div>
        <div className='flex flex-col'>
          <div className='flex justify-between mt-8'>
            <h3 className='mb-4 text-md font-semibold'>Airlines</h3>
            <MdOutlineKeyboardArrowDown className='cursor-pointer' />
          </div>
          {show && (
            <>
              <label>
                <input type='checkbox' className='' />
                <span className='ml-1'> Emirates</span>
              </label>
              <label>
                <input type='checkbox' />
                <span className='ml-1'> Qatar</span>
              </label>
              <label>
                <input type='checkbox' />
                <span className='ml-1'> Etihad</span>
              </label>
              <label>
                <input type='checkbox' />
                <span className='ml-1'> FlyDubai</span>
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
