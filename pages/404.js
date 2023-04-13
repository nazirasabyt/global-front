import React from "react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="grid place-items-center h-screen max-w-6xl w-full mx-auto">
      <div className="grid place-items-center  rounded-3xl bg-white  top-16  shadow-basic z-50 border-none  md:p-24  p-12 md:space-y-10 space-y-6">
        <div className="text-brand-clr text-center md:text-4xl text-lg font-bold ">
          404
        </div>
        <div className="text-center text-brand-clr md:text-lg italic text-sm font-bold">
          oops! it&apos;s a dead end
        </div>
        <Link href="/">
          <button className=" px-8 py-1 rounded-2xl italic md:text-base text-sm  text-white shadow-lg">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
