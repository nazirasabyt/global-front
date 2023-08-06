import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { format, addDays } from "date-fns";
import { Calendar } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { nationalities } from "../../utils/data";

const PassengerForm = (props) => {
  const { add, passenger } = props;
  const [open, setOpen] = useState(true);
  const [isOpenBirth, setOpenBirth] = useState(false);
  const [isOpenPassportExpiry, setOpenPassportExpiry] = useState(false);
  const [birthDate, setBirthDate] = useState(format(new Date(), "y-MM-dd"));
  const [passportExpiryDate, setPassportExpiryDate] = useState(
    format(new Date(), "y-MM-dd")
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: format(new Date(), "y-MM-dd"),
    nationality: "",
    passportNo: "",
    passportExpiryDate: format(new Date(), "y-MM-dd"),
    gender: "",
  });

  const handleSelectBirth = (date) => {
    setBirthDate(format(date, "y-MM-dd"));
    setFormData({
      ...formData,
      birthDate: format(date, "y-MM-dd"),
    });
    setOpenBirth(false);
  };
  const handleSelectPassportExpiry = (date) => {
    setPassportExpiryDate(format(date, "y-MM-dd"));
    setFormData({
      ...formData,
      passportExpiry: format(date, "y-MM-dd"),
    });
    setOpenPassportExpiry(false);
  };

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleClick = () => {
    setOpen((current) => !current);
  };

  useEffect(() => {
    add(formData);
  }, [formData]);

  return (
    <div className=' flex flex-col bg-white  m-8 ml-16 justify-center rounded-2xl shadow-lg  sm:w-[60%] sm:mx-auto'>
      <div className='flex m-4 p-4'>
        <MdOutlineKeyboardArrowRight
          className={`cursor-pointer mt-2 ${open ? "rotate-90" : ""}`}
          onClick={handleClick}
        />
        <h1 className='text-sm mt-2'>{passenger}</h1>
      </div>
      {open && (
        <>
          <div className='border-b border-gray w-[90%] mx-auto'></div>
          <form className='relative'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 my-8 mx-10'>
              {" "}
              <div className=''>
                <label className='block'>
                  <span className="after:content-['*'] after:ml-0.5 after:text-blue-500 block text-sm font-medium text-slate-700">
                    First Name
                  </span>
                  <input
                    required
                    className='w-full h-[42px] px-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-brand-clr focus:ring-brand-clr block  rounded-full sm:text-sm focus:ring-1'
                    id='firstName'
                    name='firstName'
                    onChange={(e) => handleInput(e)}
                    value={formData.firstName}
                  />
                  <p className='text-xs italic mt-2'>
                    Enter exactly what's written on this traveller's
                    <br /> travel document
                  </p>
                </label>
              </div>
              <div className=''>
                <label className='block'>
                  <span className="after:content-['*'] after:ml-0.5 after:text-blue-500 block text-sm font-medium text-slate-700">
                    Last Name
                  </span>
                  <input
                    required
                    className='w-full h-[42px] px-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-brand-clr focus:ring-brand-clr block  rounded-full sm:text-sm focus:ring-1'
                    onChange={(e) => handleInput(e)}
                    id='lastName'
                    name='lastName'
                    value={formData.lastName}
                  />
                  <p className='text-xs italic mt-2'>
                    Enter exactly what's written on this traveller's
                    <br /> travel document
                  </p>
                </label>
              </div>
              <div>
                <label className=' relative block  text-sm font-medium text-slate-700'>
                  Date of Birth
                  <span className='absolute  flex items-center pl-2 pt-3'>
                    <FaRegCalendarAlt className='icon' />
                  </span>
                  <input
                    required
                    className=' block w-full bg-white  border border-slate-300 rounded-full h-[42px] px-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-brand-clr focus:ring-brand-clr focus:ring-1 sm:text-sm'
                    onClick={() => setOpenBirth((open) => !open)}
                    name='dob'
                    placeholder='mm/dd/yyyy'
                    value={birthDate}
                    onChange={() => {}}
                  />
                </label>
                <div>
                  {isOpenBirth && (
                    <Calendar
                      date={new Date()}
                      onChange={handleSelectBirth}
                      className='absolute z-100 '
                      color='#8DD3BB'
                      minDate={new Date()}
                      maxDate={addDays(new Date(), 300)}
                    />
                  )}
                </div>
              </div>
              <div>
                {" "}
                <label className='w-full block '>
                  <span className="after:content-['*'] after:ml-0.5 after:text-blue-500 block text-sm font-medium text-slate-700">
                    Nationality
                  </span>

                  <select
                    name='nationality'
                    className='relative form-select block w-full bg-white  border border-slate-300 rounded-full h-[42px] px-2 shadow-sm focus:outline-none focus:border-brand-clr focus:ring-brand-clr focus:ring-1 sm:text-sm'>
                    {nationalities.map((el) => {
                      return (
                        <option
                          key={el.value}
                          value={el.value}
                          className='absolute'>
                          {el.text}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
              <div className='border-b border-gray w-[100%] mx-auto ml-4 hidden sm:block'></div>
              <div className='border-b border-gray w-[100%] mx-auto sm:-ml-4'></div>
              {/* <h1>Passport Details</h1> */}
              <div>
                {" "}
                <div className=''>
                  <label htmlFor='passportNum' className='block'>
                    <span className="after:content-['*'] after:ml-0.5 after:text-blue-500 block text-sm font-medium text-slate-700">
                      Passport No.
                    </span>
                    <input
                      required
                      className='w-full h-[42px] px-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-brand-clr focus:ring-brand-clr block  rounded-full sm:text-sm focus:ring-1'
                      onChange={(e) => handleInput(e)}
                      id='passportNum'
                      name='passportNum'
                    />
                  </label>
                </div>
              </div>
              <div>
                {" "}
                <div>
                  <label className=' relative block  text-sm font-medium text-slate-700'>
                    <span className="after:content-['*'] after:ml-0.5 after:text-blue-500 block text-sm font-medium text-slate-700">
                      Passport Expiry Date
                    </span>
                    <span className='absolute  flex items-center pl-2 pt-3'>
                      <FaRegCalendarAlt className='icon' />
                    </span>
                    <input
                      required
                      className=' block w-full bg-white h-[42px] px-2 border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-brand-clr focus:ring-brand-clr focus:ring-1 sm:text-sm'
                      name='passport'
                      placeholder='mm/dd/yyyy'
                      onClick={() => setOpenPassportExpiry((open) => !open)}
                      value={passportExpiryDate}
                      onChange={() => {}}
                    />
                  </label>
                  <div>
                    {isOpenPassportExpiry && (
                      <Calendar
                        date={new Date()}
                        onChange={handleSelectPassportExpiry}
                        color='#8DD3BB'
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 300)}
                        className='absolute z-100'
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <div>
                  {" "}
                  <label
                    className='w-full relative
            '>
                    <span className="after:content-['*'] after:ml-0.5 after:text-blue-500 block text-sm font-medium text-slate-700">
                      Gender
                    </span>

                    <select className='form-select block w-full bg-white  border border-slate-300 rounded-full h-[42px] px-2 shadow-sm focus:outline-none focus:border-brand-clr focus:ring-brand-clr focus:ring-1 sm:text-sm'>
                      <option value='' disabled>
                        Choose one option--
                      </option>
                      <option>Female</option>
                      <option>Male</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default PassengerForm;
