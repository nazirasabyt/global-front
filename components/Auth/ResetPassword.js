import React, { useState } from "react";

import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const { query } = useRouter();

  const handleEmail = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newPassword.code = query.code;
    try {
      const { data } = axios.post(
        "http://localhost:1337/auth/reset-password",
        newPassword
      );

      toast.success(
        "Your password has been resetted. In a few second you'll be redirected to login page."
      );
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };
  return (
    <div className=' w-full mx-auto flex flex-col mt-10'>
      <h1 className='text-4xl font-semibold mb-4'>Reset Password</h1>
      <div className='mt-10'>
        <form className='flex flex-col gap-5 relative' onSubmit={handleSubmit}>
          <div>
            <input
              placeholder='Type your email'
              className='border rounded-md h-12 sm:h-14 w-[300px] sm:w-full px-3  focus:outline-none '
              name='newPassword'
              type='password'
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div>
            <input
              placeholder='Type your email'
              className='border rounded-md h-12 sm:h-14 w-[300px] sm:w-full px-3  focus:outline-none '
              name='confirmPassword'
              type='password'
              onChange={(e) => handleEmail(e)}
            />
          </div>

          <div className='flex flex-col gap-3'>
            <button
              type='submit'
              className='bg-brand-clr h-10 sm:h-14 rounded-md w-full'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
