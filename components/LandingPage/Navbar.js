import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IoAirplane, IoBed } from "react-icons/io5";
import Image from "next/image";
import UseAuthContext from "../../hooks/useAuthContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const [user, setUser] = useState({
    user: "",
    token: "",
  });
  const { auth, authLogout } = UseAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (auth) setUser({ name: auth.firstName, token: auth.jwt });
  }, [user.token, auth]);

  const handleLogout = () => {
    authLogout();
    router.push("/");
  };

  return (
    <div className='flex justify-between items-center  py-6 px-6 shadow-lg bg-white'>
      {" "}
      <nav className='hidden font-semibold sm:flex flex-row gap-4'>
        <Link href='/' className='flex justify-center items-center'>
          <span>
            <IoAirplane className='md:text-2xl' />
          </span>
          Find Flight
        </Link>
        <Link href='/' className='flex justify-center items-center'>
          <span>
            <IoBed className='md:text-2xl' />
          </span>
          Find Stays
        </Link>
      </nav>
      <Link href='/'>
        <Image width={120} height={40} src='/img/logo3.png' alt='Logo Navbar' />
      </Link>
      <div className='flex gap-2 text-xs sm:text-sm justify-center items-center'>
        {user.token ? (
          ""
        ) : (
          <Link href='/login' className='hover:bg-brand-clr '>
            Login
          </Link>
        )}

        {user.token ? (
          <p
            className='bg-black text-white rounded-lg py-2 px-6 hover:bg-brand-clr'
            onClick={handleLogout}>
            Logout
          </p>
        ) : (
          <Link
            href='/register'
            className='bg-black text-white rounded-lg py-2 px-6 hover:bg-brand-clr'>
            Sign-up
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
