import Link from "next/link";
import React, { useState } from "react";
import { BsFacebook, BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineSync } from "react-icons/ai";

const RegisterComponent = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
    image: "",
    phone: "",
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
    setUser((user) => ({
      ...user,
      agree: true,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        user
      );
      console.log(data);
      if (data.jwt) {
        setLoading(false);
        toast.success("Registration Successful!");
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      setLoading(true);
      toast.error(err.message, {
        hideProgressBar: true,
      });
    }
  };
  return (
    <div className=' w-full h-screen mx-auto flex flex-col px-10 '>
      <h1 className='text-4xl font-semibold mb-4'>Sign up</h1>
      <p className='text-sm text-gray-primary '>
        Let’s get you all st up so you can access your personal account.
      </p>
      <div className='mt-10'>
        <form
          className='flex flex-col gap-5 w-full relative'
          onSubmit={handleSubmit}>
          <div className='flex  gap-5'>
            <input
              placeholder='First Name'
              className='border rounded-md h-14 w-full px-3  focus:outline-none '
              name='username'
              type='text'
              onChange={(e) => handleUser(e)}
              required
            />

            <input
              placeholder='Last Name'
              className='border rounded-md h-14 w-full px-3  focus:outline-none '
              name='lastName'
              type='text'
              onChange={(e) => handleUser(e)}
            />
          </div>

          <input
            placeholder='Your Email'
            className='border rounded-md h-14 w-full px-3  focus:outline-none '
            type='email'
            name='email'
            onChange={(e) => handleUser(e)}
          />

          <input
            placeholder='Create password'
            className='border rounded-md h-14 w-full p-3 focus:outline-none '
            type={show ? "text" : "password"}
            name='password'
            onChange={(e) => handleUser(e)}
            required
          />
          <span className='flex '>
            {show ? (
              <BsEyeFill
                size={21}
                className='absolute top-[44%] right-[3.12%] cursor-pointer'
                onClick={() => setShow(!show)}
              />
            ) : (
              <BsEyeSlashFill
                size={21}
                className='absolute top-[44%] right-[3.12%] cursor-pointer'
                onClick={() => setShow(!show)}
              />
            )}
          </span>

          <div className='flex  mb-4'>
            {" "}
            <input
              type='checkbox'
              name='agree'
              id='agree'
              checked={user.agree}
              onChange={handleChechbox}
              className='cursor-pointer mr-1'
            />
            <p className='text-xs'>
              I agree to all the Terms and Privacy Policies
            </p>
          </div>
          <div className='flex flex-col gap-3'>
            <button className='bg-[#8DD3BB] h-14 rounded-md' type='submit'>
              {loading ? <AiOutlineSync /> : "Create account"}
            </button>

            <p className='text-center text-xs'>
              Already have an account?
              <Link href='/login' className='text-salmon-clr'>
                {" "}
                Login
              </Link>
            </p>
          </div>
        </form>
        <p className='text-center text-gray-primary text-xs opacity-50 my-8'>
          Or Sign up with
        </p>
        <div className=' flex flex-row gap-4 justify-center'>
          <button className='py-4 px-6 border border-brand-clr lg:w-[160px] h-[56px] flex justify-center '>
            <BsFacebook className='text-blue-600 ' />
          </button>
          <button className='py-4 px-6 border border-brand-clr lg:w-[160px] h-[56px] flex justify-center'>
            <FcGoogle size={21} />
          </button>
          <button className='py-4 px-6 border border-brand-clr lg:w-[160px] h-[56px] flex justify-center'>
            <AiFillApple size={21} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
