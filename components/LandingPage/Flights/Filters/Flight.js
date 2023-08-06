import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDate, getLocalStoragePax } from "../../../../utils/helpers";

const Flight = (data) => {
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    const searchedFlight = getLocalStoragePax();

    if (searchedFlight.departure) {
      const formattedDate = formatDate(searchedFlight.departure);
      setDate(formattedDate);
    }

    let arr = [];
    console.log(searchedFlight);
    data.data.data.map((flight) => {
      let from = searchedFlight.from.slice(0, -5);

      let to = searchedFlight.to.slice(0, -5);

      let a = from + "-" + to;
      // console.log(a);
      let b = flight.attributes.from + "-" + flight.attributes.to;
      // console.log(b);
      if (a === b) {
        arr.push(flight);
      }
      setFilteredFlights(arr);
    });
  }, []);

  return (
    <div className=' flex flex-col gap-8 w-[90%]  md:w-[800px] mx-auto'>
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
              className='bg-white rounded-lg flex flex-col sm:flex-row py-6 px-4 gap-6 '>
              <div className='flex justify-center items-center'>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_URL +
                    item.attributes?.img?.data?.attributes?.url
                  }
                  width={160}
                  height={80}
                  alt='Airline Logo'
                />
              </div>
              <div className='px-6 sm:w-[60%]'>
                <div className='flex gap-2'>
                  <button className='border border-brand-clr py-1 px-2 rounded-md text-xs'>
                    4.2
                  </button>
                  <h3 className='font-semibold w-[460px] text-sm'>
                    Very Good{" "}
                    <span className='font-normal italic'>54 reviews</span>
                  </h3>
                </div>
                <div className='flex flex-col'>
                  <h2 className='flex flex-col mt-4 font-semibold'>{date}</h2>
                  <h2 className='flex flex-col mt-4 '>
                    {item?.attributes?.departure.slice(0, 5)} -
                    {item?.attributes?.landing.slice(0, 5)}
                    <span className='text-gray-primary text-sm opacity-80 font-normal'>
                      {item?.attributes?.codeFrom}-{item?.attributes?.codeTo}
                    </span>
                  </h2>
                </div>
                <div className=' border-b-2 opacity-80 my-6 w-full'></div>

                <Link href={`/flights/${item.id}`}>
                  <button className='bg-brand-clr w-full h-12 rounded-md text-sm font-medium '>
                    View Details{" "}
                  </button>
                </Link>
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
