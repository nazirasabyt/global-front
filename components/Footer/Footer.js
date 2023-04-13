import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  RiFacebookCircleFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiInstagramFill,
} from "react-icons/ri";

const Footer = () => {
  const [email, setEmail] = useState();

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://booking-app-5d10b-default-rtdb.firebaseio.com/subscribtions.json",
      {
        method: "POST",
        body: JSON.stringify(email),
      }
    );
    alert("Thank you for Subscribing!");
    setEmail("");
  };
  return (
    <footer className='relative '>
      <section className='w-full h-full mt-20 relative'>
        <div className='flex justify-between w-[85%] lg:w-[1232px]  mx-auto  rounded-3xl  bg-[#CDEAE1] absolute bottom-24 sm:bottom-44 inset-x-4'>
          <div className='flex flex-col px-6 sm:px-16 mb-4'>
            <h1 className='text-xl sm:text-3xl my-2 sm:my-6  font-semibold pt-2'>
              Subscribe Newsletter
            </h1>
            <h3 className='text-sm sm:text-xl mb-2 '>The Travel</h3>
            <p className='text-xs sm:text-lg mb-4  text-[#112211]'>
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <form
              onSubmit={handleSubmit}
              className=' flex flex-col lg:flex-row gap-4  text-sm  sm:text-lg'>
              <input
                placeholder='Your email adress'
                className='w-full lg:w-[500px] h-8 sm:h-12 lg:h-14 pl-2 rounded-md outline-none '
                name='subscribe'
                onChange={(e) => handleInput(e)}
                required
                value={email}
              />
              <button
                type='submit'
                className=' rounded-md bg-black text-white  py-2 px-4 mb-4 sm:py-3'>
                Subscribe
              </button>
            </form>
          </div>
          <div
            className='hidden lg:flex
          '>
            <Image
              src='/img/post.png'
              alt='Post Box'
              width={300}
              height={205}
              className='mr-8'
              loading='lazy'
            />
          </div>
        </div>
        <div className=' flex flex-col justify-center  mx-auto w-full  cursor-pointer bg-brand-clr '>
          <div className=' text-xs sm:text-lg flex p-4  justify-evenly  mt-36 sm:mt-[200px] sm:mx-16'>
            {" "}
            <div className=' flex flex-col gap-1 justify-center '>
              {" "}
              <Link href='/'>
                <Image
                  width={80}
                  height={10}
                  src='/img/logo2.png'
                  alt='Logo Footer'
                  loading='lazy'
                  className='sm:w-[100px] '
                />
              </Link>
              <div className='flex justify-center items-center gap-2 mt-1 sm:mt-0'>
                <i>
                  <RiFacebookCircleFill className='sm:text-2xl' />
                </i>
                <i>
                  <RiTwitterFill className='sm:text-2xl' />
                </i>
                <i>
                  <RiYoutubeFill className='sm:text-2xl' />
                </i>
                <i>
                  <RiInstagramFill className='sm:text-2xl' />
                </i>
              </div>
            </div>
            <ul className='hidden lg:flex flex-col gap-1'>
              <h1 className='font-semibold'>Our Destinations</h1>
              <li>UAE</li>
              <li>Saudi Arabia</li>
              <li>Oman</li>
            </ul>
            <ul className='hidden sm:flex flex-col'>
              <h1 className='font-semibold'>Our Activities</h1>

              <li>Kayaking</li>
              <li>Safari</li>
              <li>Museums</li>
            </ul>
            <ul>
              <h1 className='font-semibold'>About Us</h1>
              <li>Our Story</li>
              <li>Work with us</li>
            </ul>
            <ul>
              <h1 className='font-semibold'>Contact Us</h1>
              <li>Email</li>
              <li>Phone Number</li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
