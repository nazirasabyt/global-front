import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { RiEditCircleFill } from "react-icons/ri";
import UseAuthContext from "../../hooks/useAuthContext";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Profile = () => {
  const [user, setUser] = useState({
    user: "",
    token: "",
  });
  const { auth } = UseAuthContext();

  const router = useRouter();
  useEffect(() => {
    if (auth) {
      setUser({ name: auth.firstName, token: auth.jwt });
    } else {
      router.push("/login");
    }
  }, [user.token, auth]);

  const [userData, setUserData] = useState({
    firstName: "",
    lasteName: "",
    email: "",
    adress: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className=' w-full lg:w-[1232px] mx-auto mt-12'>
      <div>
        <Image
          src='/img/profilecover.png'
          width={1232}
          height={350}
          alt='Profile Cover'
        />
      </div>
      <div className='w-full  px-6 py-16 sm:px-0 '>
        <Tab.Group>
          <Tab.List className='bg-white py-4 px-6 h-20 rounded-lg flex justify-start items-center lg:gap-16 divide-x '>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/3 text-sm font-medium  ",

                  selected
                    ? "text-brand-clr"
                    : "text-black hover:text-brand-clr/[0.72] "
                )
              }>
              Account
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/3 text-sm font-medium  ",

                  selected
                    ? "text-brand-clr"
                    : "text-black hover:text-brand-clr/[0.72] "
                )
              }>
              History
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-1/3 text-sm font-medium  ",

                  selected
                    ? "text-brand-clr"
                    : "text-black hover:text-brand-clr/[0.72] "
                )
              }>
              Payment methods
            </Tab>
          </Tab.List>
          {/* <h1 className='text-2xl font-semibold mt-8 mb-4'>Account</h1> */}
          <Tab.Panels className='bg-white h-[536px] rounded-lg py-8 px-4 sm:px-8 mt-8'>
            <Tab.Panel>
              <h2 className='text-xl font-semibold'>Account</h2>
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 mt-8'>
                <div className='flex justify-between'>
                  <label className='flex flex-col'>
                    <span className='text-primary-gray opacity-70 text-sm'>
                      Name
                    </span>
                    <input
                      placeholder='First Name'
                      className='text-lg font-medium py-1'
                      value={auth?.user?.username}
                      onChange={(e) => handleChange(e)}
                      type='text'
                      name='firstName'
                    />
                  </label>
                  <button className='flex items-center gap-1 border-brand-clr py-2 px-4 rounded-lg w-[140px]'>
                    <RiEditCircleFill /> Change
                  </button>
                </div>
                <div className='flex justify-between'>
                  <label className='flex flex-col'>
                    <span className='text-primary-gray opacity-70 text-sm'>
                      Last Name
                    </span>
                    <input
                      placeholder='Last Name'
                      name='lastName'
                      type='text'
                      value={auth?.user?.lastName}
                      onChange={(e) => handleChange(e)}
                      className='text-lg font-medium py-1'
                    />
                  </label>
                  <button className='flex items-center gap-1 border-brand-clr py-2 px-4 rounded-lg w-[140px]'>
                    <RiEditCircleFill /> Change
                  </button>
                </div>
                <div className='flex justify-between'>
                  <label className='flex flex-col'>
                    <span className='text-primary-gray opacity-70 text-sm'>
                      Email
                    </span>
                    <input
                      placeholder='Email'
                      type='email'
                      value={auth?.user?.email}
                      onChange={(e) => handleChange(e)}
                      className='text-lg font-medium py-1'
                    />
                  </label>
                  <button className='flex items-center gap-1 border-brand-clr py-2 px-4 rounded-lg w-[140px]'>
                    <RiEditCircleFill /> Change
                  </button>
                </div>

                <div className='flex justify-between'>
                  <label className='flex flex-col '>
                    <span className='text-primary-gray opacity-70 text-sm'>
                      Phone Number
                    </span>
                    <input
                      placeholder='Phone Number'
                      type='number'
                      name='phoneNumber'
                      value={auth?.user?.phoneNumber}
                      onChange={(e) => handleChange(e)}
                      className='text-lg font-medium py-1'
                    />
                  </label>
                  <button className='flex items-center gap-1 border-brand-clr py-2 px-4 rounded-lg w-[140px]'>
                    <RiEditCircleFill /> Change
                  </button>
                </div>
                <div className='flex justify-between'>
                  <label className='flex flex-col w-[350px]'>
                    <span className='text-primary-gray opacity-70 text-sm'>
                      Adress
                    </span>
                    <input
                      type='text'
                      name='adress'
                      placeholder='Adress'
                      onChange={(e) => handleChange(e)}
                      value={auth?.user?.adress}
                      className=' text-lg font-medium py-1'
                    />
                  </label>
                  <button className='flex items-center gap-1 border-brand-clr py-2 px-4 rounded-lg w-[140px]'>
                    <RiEditCircleFill /> Change
                  </button>
                </div>
              </form>
            </Tab.Panel>
            <Tab.Panel>
              <h2>No flights purchases yet.</h2>
            </Tab.Panel>
            <Tab.Panel>
              <h2>No cards added.</h2>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Profile;
