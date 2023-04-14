import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleEmail = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    toast.success("Please check your email to reset your password.");
    router.push("/");
  };
  return (
    <div className=' w-full mx-auto flex flex-col '>
      <h1 className='text-2xl sm:text-4xl font-semibold mb-4 text-center'>
        Forgot Password
      </h1>
      <p className='text-sm text-gray-primary text-center'>
        Enter your email to reset.
      </p>

      <form
        className='flex flex-col gap-5 relative w-[300px] mx-auto mt-5'
        onSubmit={handleSubmit}>
        <div>
          <input
            placeholder='Type your email'
            className='border rounded-md h-12 sm:h-14 w-[300px] sm:w-full px-3  focus:outline-none '
            name='email'
            type='email'
            onChange={(e) => handleEmail(e)}
          />
        </div>

        <div className='flex flex-col gap-3 w-full mx-auto'>
          <button
            type='submit'
            className='bg-brand-clr h-10 sm:h-14 rounded-md w-full'>
            Reset Password
          </button>
          <p className='text-center text-xs sm:text-sm'>
            or
            <Link href='/login' className='text-salmon-clr'>
              {" "}
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
