import React from "react";
import Image from "next/image";
import { trips } from "../../utils/data";

const Place = () => {
  return (
    <section className='grid  sm:grid-cols-4 gap-4  lg:w-[1232px] mx-auto '>
      {trips.map((el) => {
        return (
          <div key={el.id} className='relative'>
            <Image
              className='rounded-lg py-4 isolate order-3'
              src={el.image}
              width={296}
              height={420}
              alt={el.name}
              loading='lazy'
            />
            <div className='flex flex-col absolute items-start order-1 z-10 top-[286px] left-[24px]'>
              <h2 className='text-white font-semibold text-2xl'>{el.name}</h2>
              <p className='text-white flex gap-8'>{el.text}</p>

              <button className='bg-brand-clr py-2 px-4 w-[248px] h-12 rounded-md mt-3'>
                Book Flight
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Place;
