import { useState, useEffect } from "react";

const Modal = (props) => {
  const [paxData, setPaxData] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const { add } = props;

  useEffect(() => {
    add(paxData);
  }, [paxData]);
  return (
    <div>
      <div className=' absolute mt-4  w-75 p-5 bg-white  text-gray-500 shadow-basic rounded-2xl overflow-y-auto'>
        <div className='relative flex justify-between items-center my-[1rem]'>
          <h1 className=' my-[8px] sm:text-[16px] flex flex-col'>Adults</h1>
          <div className='flex items-center gap-3 text-gray-800 text-xs'>
            <button
              type='button'
              onClick={() =>
                setPaxData({
                  ...paxData,
                  adults: paxData.adults - 1,
                })
              }
              disabled={paxData.adults === 0}
              className='border-2 border-[#8DD3BB] px-2  rounded-lg justify-center text-center hover:text-white hover:bg-[#8DD3BB] font-medium'>
              -
            </button>
            <span className='font-semibold text-base '>{paxData.adults}</span>
            <button
              type='button'
              onClick={() =>
                setPaxData({
                  ...paxData,
                  adults: paxData.adults + 1,
                })
              }
              className='border-2 border-[#8DD3BB] px-2  rounded-lg justify-center text-center hover:text-white hover:bg-[#8DD3BB] font-medium'>
              +
            </button>
          </div>
        </div>
        <div className='relative flex justify-between items-center my-[1rem]'>
          <h1 className=' my-[8px] sm:text-[16px] flex flex-col'>
            Children{" "}
            <span className='text-xs italic text-gray-500'>
              between 2 & 11 years
            </span>
          </h1>
          <div className='flex items-center gap-3 text-gray-800 text-xs ml-1'>
            <button
              type='button'
              onClick={() =>
                setPaxData({
                  ...paxData,
                  children: paxData.children - 1,
                })
              }
              disabled={paxData.children === 0}
              className='border-2 border-[#8DD3BB] px-2  rounded-lg justify-center text-center hover:text-white hover:bg-[#8DD3BB] font-medium'>
              -
            </button>
            <span className='font-semibold text-base '>{paxData.children}</span>
            <button
              type='button'
              onClick={() =>
                setPaxData({
                  ...paxData,
                  children: paxData.children + 1,
                })
              }
              className='border-2 border-[#8DD3BB] px-2  rounded-lg justify-center text-center hover:text-white hover:bg-[#8DD3BB] font-medium'>
              +
            </button>
          </div>
        </div>
        <div className='relative flex justify-between items-center my-[1rem]'>
          <h1 className=' my-[8px] sm:text-[16px] flex flex-col'>
            Infants{" "}
            <span className='text-xs italic text-gray-500'>under 2 years</span>
          </h1>
          <div className='flex items-center gap-3 text-gray-800 text-xs ml-1'>
            <button
              type='button'
              onClick={() =>
                setPaxData({
                  ...paxData,
                  infants: paxData.infants - 1,
                })
              }
              disabled={paxData.infants === 0}
              className='border-2 border-[#8DD3BB] px-2  rounded-lg justify-center text-center hover:text-white hover:bg-[#8DD3BB] font-medium'>
              -
            </button>
            <span className='font-semibold text-base '>{paxData.infants}</span>
            <button
              type='button'
              onClick={() =>
                setPaxData({
                  ...paxData,
                  infants: paxData.infants + 1,
                })
              }
              className='border-2 border-[#8DD3BB] px-2  rounded-lg justify-center text-center hover:text-white hover:bg-[#8DD3BB] font-medium'>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
