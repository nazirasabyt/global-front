import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getLocalStoragePax } from "../../../utils/helpers";

const Flight = (props) => {
  const searchedFlight = getLocalStoragePax();
  const { data } = props;

  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    let arr = [];
    console.log(searchedFlight);
    data.map((flight) => {
      let a = searchedFlight.from + "-" + searchedFlight.to;
      console.log(a);
      let b = flight.attributes.cityFrom + "-" + flight.attributes.cityTo;
      console.log(b);
      if (a === b) {
        arr.push(flight);
      }
      setFilteredFlights(arr);
    });
  }, []);

  return (
    <div className=' flex flex-col gap-8 w-[360px]  sm:w-[800px] mx-auto'>
      <p className='text-sm font-semibold py-6'>
        Showing {`${filteredFlights.length}`} of{" "}
        <span className='text-salmon-clr'>
          {`${filteredFlights.length}`} flights
        </span>
      </p>
      {filteredFlights.length > 0 ? (
        filteredFlights.map((item) => {
          return (
            <div
              key={item.id}
              className='bg-white rounded-lg flex flex-col sm:flex-row py-6 px-4 gap-4 '>
              <div className='flex justify-center items-center'>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_UPLOAD_URL +
                    item.attributes?.logo?.data?.attributes?.url
                  }
                  width={160}
                  height={80}
                  alt='Airline Logo'
                />
              </div>
              <div className='px-6'>
                <div className='flex gap-2'>
                  <button className='border border-brand-clr py-1 px-2 rounded-md text-xs'>
                    4.2
                  </button>
                  <h3 className='font-semibold w-[460px] text-sm'>
                    Very Good{" "}
                    <span className='font-normal italic'>54 reviews</span>
                  </h3>
                </div>
                <div className='flex gap-2 lg:gap-6 '>
                  <h2 className='flex flex-col mt-4 font-semibold'>
                    12:00 pm - 01:28 pm{" "}
                    <span className='text-gray-primary text-sm opacity-80 font-normal'>
                      {item?.attributes?.airline}
                    </span>
                  </h2>
                  <p className='text-sm opacity-80 mt-4'>non stop</p>
                  <h2 className='flex flex-col mt-4 font-semibold'>
                    2h 28m{" "}
                    <span className='text-gray-primary text-sm opacity-80 font-normal'>
                      {item?.attributes?.code}
                    </span>
                  </h2>
                </div>
                <div className=' border-b-2 opacity-80 my-6 w-full'></div>
                <button className='bg-brand-clr w-full h-12 rounded-md text-sm font-medium '>
                  <Link href={`/flights/${item.id}`}>View Details</Link>
                </button>
              </div>
              <p
                className='hidden sm:flex flex-col 
             text-xs gap-1'>
                starting from
                <span className='text-2xl text-salmon-clr font-semibold'>
                  ${item?.attributes?.price}
                </span>
              </p>
            </div>
          );
        })
      ) : (
        <p className='text-salmon-clr'>No flights found! Try different city</p>
      )}
    </div>
  );
};

export default Flight;
