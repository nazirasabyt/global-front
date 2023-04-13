import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <div className='flex h-screen bg-white '>
      <div className='m-auto sm:w-3/4 h-3/4 grid lg:grid-cols-2 lg:gap-20 '>
        <div className=' flex flex-col   '>
          <Link href='/' className='hidden lg:block ml-10 mb-20'>
            <Image src='/img/logo3.png' alt='Logo' width={110} height={36} />
          </Link>
          <div className='text-start  lg:mt-0'> {children}</div>
        </div>
        <div
          className=' hidden lg:block
        '>
          <Image
            src='/img/side.png'
            alt='Hotel Image'
            width={486}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
