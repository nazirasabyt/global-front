import React from "react";
import Place from "./Place";

const Places = () => {
  return (
    <section className='flex flex-col gap-8 my-20   mx-auto lg:w-[1232px]'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl sm:text-4xl font-semibold'>Fall into travel</h1>
        <p className='text-xs sm:text-sm'>
          Going somewhere to celebrate this season? Whether you’re going home or
          somewhere to roam, we’ve got the travel tools to get you to your
          destination.
        </p>
      </div>
      <Place />
    </section>
  );
};

export default Places;
