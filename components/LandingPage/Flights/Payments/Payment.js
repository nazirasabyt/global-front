import React, { useState } from "react";

const Payment = () => {
  const [active, setActive] = useState(0);

  return (
    <div className='bg-white rounded-lg shadow-lg p-6 gap-4 flex flex-col w-full m-auto'>
      <div
        className={` flex justify-between p-4 ${active == 0 ? "active" : ""}`}>
        <div className='flex flex-col gap-1'>
          <h2 className='text-md font-semibold'>Pay now</h2>
          <p className='text-sm'>Pay the total and you are all set</p>
        </div>
        <input
          type='radio'
          className='cursor-pointer p-4'
          name='paynow'
          checked={active == 0}
          onClick={() => setActive(0)}
          onChange={() => {}}
        />
      </div>

      <div
        className={` flex justify-between p-4 ${active == 1 ? "active" : ""}`}>
        <div className='flex flex-col gap-1'>
          <h2 className='text-md font-semibold'>Pay part now, part later</h2>
          <p className='text-sm'>
            Pay $207.43 now, and the rest ($207.43) will be automatically
            charged to the same payment method on Nov 14, 2022. No extra fees.
          </p>
        </div>
        <input
          type='radio'
          className='cursor-pointer p-4'
          name='paylater'
          checked={active == 1}
          onClick={() => setActive(1)}
          onChange={()=>{}}
        />
      </div>
    </div>
  );
};

export default Payment;
