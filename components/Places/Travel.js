import React from "react";
import Image from "next/image";
import Link from "next/link";

const Travel = () => {
  return (
    <div className='hidden sm:flex flex-col w-[700px]  mx-auto lg:w-[1232px] h-[95vh] lg:h-[60vh] '>
      <h2 className='text-4xl font-semibold mb-2 '>Fall into travel</h2>
      <p className=' '>
        Going somewhere to celebrate this season? Whether you’re going home or
        somewhere to roam, we’ve got the travel tools to get you to your
        destination.
      </p>
      <div className='flex flex-col lg:flex-row gap-8 mt-8 justify-center items-center'>
        <div className='w-[690px] lg:w-[552px] bg-brand-clr sm:rounded-lg p-6'>
          <div className='flex justify-between mb-6'>
            <h1 className='text-4xl font-semibold'>
              Backpacking <br /> Sri Lanka
            </h1>
            <button className='flex flex-col p-2 bg-white rounded-lg text-sm '>
              From
              <span className='text-2xl font-semibold '>$700</span>
            </button>
          </div>
          <p className='mb-10 lg:mb-[120px] text-sm'>
            Traveling is a unique experience as it's the best way to unplug from
            the pushes and pulls of daily life. It helps us to forget about our
            problems, frustrations, and fears at home. During our journey, we
            experience life in different ways. We explore new places, cultures,
            cuisines, traditions, and ways of living.
          </p>
          <Link
            href={"/flights/2"}
            className='bg-white py-2 px-4 lg:w-[504px] h-12'>
            Book Flight
          </Link>
        </div>
        <div className='grid grid-cols-2  gap-4'>
          <Image
            src='/img/travel1.png'
            width={318}
            height={190}
            alt='Travel Image'
          />
          <Image
            src='/img/travel2.png'
            width={310}
            height={190}
            alt='Travel Image'
          />
          <Image
            src='/img/travel3.png'
            width={310}
            height={190}
            alt='Travel Image'
          />
          <Image
            src='/img/travel4.png'
            width={310}
            height={190}
            alt='Travel Image'
          />
        </div>
      </div>
    </div>
  );
};

export default Travel;
