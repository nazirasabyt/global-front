import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <div className='flex w-full mx-auto h-full bg-white'>
      <div className='m-auto w-[80%] sm:w-3/4 sm:h-3/4 grid grid-cols-1 sm:grid-cols-2 sm:gap-5 mt-20'>
        <div className=' flex flex-col'>
          <Link href='/' className='sm:ml-10 mb-4 sm:mb-20'>
            <Image src='/img/logo3.png' alt='Logo' width={110} height={36} />
          </Link>
          <div className='text-start w-full h-screen'> {children}</div>
        </div>
        <div
          className='mt-16 hidden sm:flex h-[600px]
        '>
          <Image
            src='/img/side.jpg'
            alt='Hotel Image'
            width={486}
            height={300}
            className='object-fit'
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
