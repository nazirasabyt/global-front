import { useEffect, useRef, useState } from "react";
import { cities } from "../../../utils/data";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Modal from "../../Modal";
import { Calendar } from "react-date-range";
import { format, addDays } from "date-fns";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/router";
import { addOrUpdateItem } from "../../../utils/helpers";
import { HiUsers } from "react-icons/hi";

const Form = ({ trip }) => {
  const [modal, setModal] = useState(false);
  const [citiesList, setCitiesList] = useState({
    from: false,
    to: false,
  });

  const [fromCitiesData, setFromCitiesData] = useState([]);
  const [toCitiesData, setToCitiesData] = useState([]);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departure: format(new Date(), "y-MM-dd"),
    return: format(new Date(), "y-MM-dd"),
    pax: [],
    type: trip,
  });

  const handleModalData = (data) => {
    setFormData({
      ...formData,
      pax: addOrUpdateItem(formData.pax, data),
    });
  };

  const modalRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  });

  const hideOnClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModal(false);
    }
  };

  const [isOpenDeparture, setOpenDeparture] = useState(false);
  const [isOpenReturn, setOpenReturn] = useState(false);
  const [departureDate, setDepartureDate] = useState(
    format(new Date(), "y-MM-dd")
  );
  const [returnDate, setReturnDate] = useState(format(new Date(), "y-MM-dd"));

  const handleSelectDeparture = (date) => {
    setDepartureDate(format(date, "y-MM-dd"));
    setFormData({
      ...formData,
      departure: format(date, "y-MM-dd"),
    });
    setOpenDeparture(false);
  };
  const handleSelectReturn = (date) => {
    setReturnDate(format(date, "y-MM-dd"));
    setFormData({
      ...formData,
      return: format(date, "y-MM-dd"),
    });
    setOpenReturn(false);
  };

  const handleInput = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setFormData({ ...formData, [name]: value });

    const newFilter = cities.filter((word) => {
      return word.city.toLowerCase().includes(value.toLowerCase());
    });

    if (name === "from") {
      setCitiesList({ ...citiesList, from: true });
      setFromCitiesData(newFilter);
    }
    if (name === "to") {
      setCitiesList({ ...citiesList, to: true });
      setToCitiesData(newFilter);
    }
  };

  const handlePlace = (e, source) => {
    setFormData({ ...formData, [source]: e.target.innerText });
    setCitiesList({ ...citiesList, [source]: false });
  };

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    router.push("/flights");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4  relative '>
        <div className='relative col-span-1 block text-sm font-medium text-slate-700'>
          {" "}
          <h5 className='font-semibold md:text-sm  mb-1 '> From</h5>
          <label className='relative block'>
            <span className='absolute inset-y-0 left-2 flex items-center'>
              <FaPlaneDeparture className='icon' />
            </span>
            <input
              required
              name='from'
              id='from'
              placeholder='Origin'
              className=' block bg-white w-full border sm:h-[40px] rounded-sm py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-brand-clr focus:ring-brand-clr focus:ring-1 sm:text-sm'
              value={formData.from}
              onChange={(e) => handleInput(e)}
            />
          </label>
          {fromCitiesData.length != 0 && citiesList.from && (
            <div className='absolute  top-16 bg-white border-b rounded-lg z-100 shadow-basic w-40'>
              {fromCitiesData.map((item) => {
                return (
                  <button
                    key={item.code}
                    type={"button"}
                    className='flex text-start space-x-1 items-center py-2 px-1 border-b last:border-none w-full hover:bg-gray-400'
                    onClick={(e) => handlePlace(e, "from")}>
                    <span className=''>
                      <IoLocationSharp className='' />
                    </span>
                    <span className='text-sm  italic text-gray-700'>
                      {item.city}
                      {`(${item.code})`}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <div className='relative col-span-1  block text-sm font-medium text-slate-700'>
          {" "}
          <h5 className='font-semibold md:text-sm  mb-1'> To</h5>
          <label className=' relative block'>
            <span className='absolute inset-y-0 left-2 flex items-center'>
              <FaPlaneArrival className='icon' />
            </span>
            <input
              required
              name='to'
              id='to'
              placeholder='Destination'
              className=' block bg-white  w-full border sm:h-[40px] rounded-sm py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-brand-clr focus:ring-brand-clr focus:ring-1 sm:text-sm'
              value={formData.to}
              onChange={(e) => handleInput(e)}
            />
          </label>
          {toCitiesData.length != 0 && citiesList.to && (
            <div className=' absolute  top-16 bg-white border-b rounded-lg z-100 shadow-basic w-40   '>
              {toCitiesData.map((item) => {
                return (
                  <button
                    key={item.code}
                    type={"button"}
                    className='flex text-start space-x-1 items-center py-2 px-1 border-b last:border-none w-full hover:bg-gray-400'
                    onClick={(e) => handlePlace(e, "to")}>
                    <span className=''>
                      <IoLocationSharp />
                    </span>
                    <span className='text-sm  italic text-gray-700'>
                      {item.city}
                      {`(${item.code})`}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        <div className=' text-sm font-medium text-slate-700'>
          {" "}
          <h5 className='font-semibold md:text-sm  mb-1'> Departure</h5>
          <label className=' relative block  '>
            <span className='absolute  flex items-center inset-y-0 left-2'>
              <FaRegCalendarAlt className='icon' />
            </span>
            <input
              required
              name='departure'
              placeholder='mm/dd/yyyy'
              value={departureDate}
              className=' block w-full bg-white  border sm:h-[40px] rounded-sm py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-brand-clr focus:ring-brand-clr focus:ring-1 sm:text-sm'
              onChange={() => {}}
              onClick={() => setOpenDeparture((open) => !open)}
            />
            <div>
              {isOpenDeparture && (
                <Calendar
                  date={new Date()}
                  onChange={handleSelectDeparture}
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 300)}
                  className='absolute z-100 '
                  color='#8DD3BB'
                />
              )}
            </div>
          </label>
        </div>

        {trip.type === "Return" && (
          <div className='text-sm font-medium text-slate-700'>
            {" "}
            <h5 className='font-semibold md:text-sm  mb-1'> Return</h5>
            <label className=' relative block  '>
              <span className='absolute  flex items-center inset-y-0 left-2'>
                <FaRegCalendarAlt className='icon' />
              </span>
              <input
                required
                value={returnDate}
                placeholder='mm/dd/yyyy'
                name='return'
                className=' w-full bg-white  border sm:h-[40px] rounded-sm py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-brand-clr focus:ring-brand-clr focus:ring-1 sm:text-sm'
                onChange={() => {}}
                onClick={() => setOpenReturn((open) => !open)}
              />
              <div className='absolute '>
                {isOpenReturn && (
                  <Calendar
                    date={new Date()}
                    onChange={handleSelectReturn}
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 300)}
                    className='absolute z-100 '
                    color='#8DD3BB'
                  />
                )}
              </div>
            </label>
          </div>
        )}

        <div className='col-span-1  block text-sm font-medium text-slate-700'>
          {" "}
          <h5 className='font-semibold md:text-sm  mb-1'>Passengers</h5>
          <label className=' relative block'>
            <span className='absolute  flex items-center inset-y-0 left-2'>
              <HiUsers className='icon' />
            </span>
            <input
              required
              placeholder='2 Adults, 1 Child, 0 Infants'
              type='text'
              className=' block  bg-white w-full border sm:h-[40px] rounded-sm py-2 pl-6 pr-3 shadow-sm focus:outline-none focus:border-brand-clr focus:ring-brand-clr focus:ring-1 sm:text-sm'
              onChange={() => {}}
              onClick={() => setModal((modal) => !modal)}
              value={formData.pax.map((item) => {
                return `${item.adults} Adults, ${item.children} Child, ${item.infants} Infants`;
              })}
            />

            <div ref={modalRef}>{modal && <Modal add={handleModalData} />}</div>
          </label>
        </div>
        <div className='col-span-1 mt-6'>
          <button
            className='block w-full bg-brand-clr   h-[40px] rounded-sm shadow-sm focus:outline-none hover:bg-[#70d4b2]  sm:text-sm '
            type='submit'>
            Search Flights
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
