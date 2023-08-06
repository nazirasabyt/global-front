import Link from "next/link";
import React, { useState } from "react";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import Image from "next/image";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <div className=' w-full mx-auto flex flex-col sm:px-10 mt-10'>
      <h1 className='text-4xl font-semibold mb-4 '>Login</h1>
      <p className='text-sm '>Login to access your account</p>
      <div className='mt-10'>
        <form
          className='flex flex-col gap-5 relative w-full'
          onSubmit={handleSubmit}>
          <div>
            <input
              placeholder='Email'
              className='border rounded-md h-14 w-full px-3  focus:outline-none'
              name='identifier'
              type='text'
              onChange={(e) => handleUser(e)}
              required
            />
          </div>
          <div className='relative'>
            <input
              placeholder='Password'
              className='border rounded-md h-14 w-full px-3  focus:outline-none'
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
            <Link
              href='/forgot-password'
              className=' flex-end text-xs text-salmon-clr cursor-pointer'>
              Forgot password
            </Link>
          </div>
          <div className='flex flex-col gap-3'>
            <button
              type='submit'
              className='bg-brand-clr h-12 sm:h-14 rounded-md w-full'>
              Submit
            </button>

            <p className='text-center text-xs'>
              Don’t have an account?
              <Link href='/register' className='text-salmon-clr'>
                {" "}
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
