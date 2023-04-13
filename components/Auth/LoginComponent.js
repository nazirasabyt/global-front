import Link from "next/link";
import React, { useState } from "react";
import { BsFacebook, BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import UseAuthContext from "../../hooks/useAuthContext";

const LoginComponent = () => {
  const [show, setShow] = useState(false);
  const { auth, authLogin } = UseAuthContext();
  const [user, setUser] = useState({
    identifier: "",
    password: "",
    rememberPassword: false,
  });

  const router = useRouter();
  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleChechbox = (e) => {
    if (localStorage.user && localStorage.user !== "") {
      setUser((user) => ({
        ...user,
        rememberPassword: false,
      }));
    } else {
      setUser((user) => ({
        ...user,
        rememberPassword: true,
      }));
      localStorage.setItem("user", user);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
        user
      );

      if (data.jwt) {
        toast.success("Login Successful!");
        authLogin(data);
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className=' w-full mx-auto flex flex-col px-10'>
      <h1 className='text-4xl font-semibold mb-4'>Login</h1>
      <p className='text-sm text-gray-primary'>Login to access your account</p>
      <div className='mt-10'>
        <form
          className='flex flex-col gap-5 relative w-full'
          onSubmit={handleSubmit}>
          <div>
            <input
              placeholder='Type your email'
              className='border rounded-md h-14 w-full px-3  focus:outline-none  '
              name='identifier'
              type='email'
              onChange={(e) => handleUser(e)}
              required
            />
          </div>
          <div className='relative'>
            <input
              placeholder='Type your password'
              className='border rounded-md h-14 w-full px-3  focus:outline-none  '
              type={show ? "text" : "password"}
              name='password'
              onChange={(e) => handleUser(e)}
              required
            />
            <span className='flex '>
              {show ? (
                <BsEyeFill
                  size={21}
                  className='absolute top-[34%] sm:top-[44%] right-[3.12%] cursor-pointer'
                  onClick={() => setShow(!show)}
                />
              ) : (
                <BsEyeSlashFill
                  size={21}
                  className='absolute  top-[34%] sm:top-[44%] right-[3.12%] cursor-pointer'
                  onClick={() => setShow(!show)}
                />
              )}
            </span>
          </div>
          <div className='flex justify-between mb-4'>
            <div className='flex text-xs'>
              {" "}
              <input
                type='checkbox'
                id='rememberPassword'
                name='rememberPassword'
                className='cursor-pointer mr-1'
                checked={user.rememberPassword}
                onChange={handleChechbox}
              />
              <p>Remember me</p>
            </div>
            <Link
              href='/forgot-password'
              className=' flex-end text-xs text-salmon-clr cursor-pointer'>
              Forgot password
            </Link>
          </div>
          <div className='flex flex-col gap-3'>
            <button
              type='submit'
              className='bg-brand-clr h-10 sm:h-14 rounded-md w-full'>
              Login
            </button>
            <ToastContainer />
            <p className='text-center text-xs'>
              Don’t have an account?
              <Link href='/register' className='text-salmon-clr'>
                {" "}
                Sign up
              </Link>
            </p>
          </div>
        </form>
        <p className='text-center text-gray-primary text-xs opacity-50 my-8'>
          Or login with
        </p>
        <div className=' flex gap-4 justify-center items-center '>
          <button className='py-4 px-6 border border-brand-clr sm:w-[160px] sm:h-[56px] flex justify-center '>
            <BsFacebook className='text-blue-600 ' />
          </button>
          <button className='py-4 px-6 border border-brand-clr sm:w-[160px] sm:h-[56px] flex justify-center'>
            <FcGoogle size={21} />
          </button>
          <button
            disabled={true}
            className='py-4 px-6 border border-brand-clr sm:w-[160px] sm:h-[56px] flex justify-center'>
            <AiFillApple size={21} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
