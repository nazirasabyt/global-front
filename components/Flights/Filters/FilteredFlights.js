import React from "react";
import Flight from "./Flight";
import { RxHamburgerMenu } from "react-icons/rx";

const FilteredFlights = ({ flights }) => {
  const data = flights.data;

  return (
    <div className='flex  flex-col w-[360px] sm:w-[800px] mx-auto'>
      <div className='flex flex-row  divide-x bg-white sm:gap-6 py-4 sm:px-6 rounded-md'>
        <div className='py-1 px-6 flex flex-col gap-2'>
          <h3 className='text-md font-semibold'>Cheapest</h3>
          <p className='text-gray-primary opacity-40 text-sm'>$99 . 2h 18m</p>
        </div>
        <div className='py-1 px-6 flex flex-col gap-2'>
          <h3 className='text-md font-semibold'>Best</h3>
          <p className='text-gray-primary opacity-40 text-sm'>$99 . 2h 18m</p>
        </div>
        <div className='py-1 px-6 flex flex-col gap-2'>
          <h3 className='text-md font-semibold'>Quickest</h3>
          <p className='text-gray-primary opacity-40 text-sm'>$99 . 2h 18m</p>
        </div>
        <h3 className='hidden sm:flex justify-center items-center gap-2 py-1 px-6 text-md font-semibold'>
          <RxHamburgerMenu />
          Other sort
        </h3>
      </div>

      <div>
        <Flight data={data} />
      </div>
    </div>
  );
};

export default FilteredFlights;
