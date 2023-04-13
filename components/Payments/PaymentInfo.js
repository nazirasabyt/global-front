import React, { useState, useEffect } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { getLocalStorage, getLocalStoragePax } from "../../utils/helpers";
import { ethers } from "ethers";
import { useWeb3 } from "@3rdweb/hooks";

const PaymentInfo = () => {
  const [flightInfo, setFlightInfo] = useState();
  const [paxInfo, setPaxInfo] = useState();

  useEffect(() => {
    const flight = getLocalStorage();
    setFlightInfo(flight);
    const data = getLocalStoragePax();
    setPaxInfo(data);
  }, []);

  const [wallet, setWallet] = useState({
    publicAddress: "",
    walletBalance: {},
  });
  const { address, balance, connectWallet, error } = useWeb3();

  const handleConnetion = () => {
    console.log("accessing wallet data. please wait ...");
    connectWallet("injected");
    if (error) {
      alert(error.message);
    } else {
      setWallet({ publicAddress: address, walletBalance: balance });
    }
  };

  return (
    <div>
      <div>
        <p className="mt-8 ml-8 text-gray-400 text-sm">Passengers Details</p>
      </div>
      <div className=" ml-8 mt-6">
        <div>
          <h1 className="text-2xl flex font-semibold text-gray-800">
            {flightInfo && flightInfo.from}{" "}
            <span>
              <HiOutlineArrowNarrowRight className="m-2" />
            </span>
            {flightInfo && flightInfo.to}
          </h1>

          {!address && (
            <button
              type="button"
              className="px-4 py-2 rounded-lg text-white bg-brand-clr hover:bg-teal-500 focus:bg-teal-200 font-semibold "
              onClick={handleConnetion}
            >
              Check and Pay
            </button>
          )}

          <div className="flex flex-col justify-center rounded-2xl border-solid border border-gray-300 mt-6">
            <h1 className="mt-6 ml-8">{`FlightInfo to ${
              flightInfo && flightInfo.to
            }`}</h1>
            <p className="ml-8">{`Mon ${
              flightInfo && flightInfo.departure
            } - Mon ${flightInfo && flightInfo.return} `}</p>
            <p className="ml-8">1 stop - 5h - 0m</p>
            <p className="ml-8 mb-8 text-blue-500">See flight details</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center rounded-2xl border border-gray-300 ml-8 mt-6">
        <h1 className="ml-8 mt-6 font-semibold">Contact details</h1>
        <p className="ml-8">+9712321456</p>
        <p className="ml-8">nawras@innovationfactory.biz</p>
        <p className="ml-8 mb-8 flex">
          <TiTick className="icon" /> You&apos;ll get flight updates by text
        </p>
      </div>
      <div>
        <div className="flex flex-col justify-center rounded-2xl border border-gray-300 ml-8 mt-6">
          <h1 className="ml-8 mt-6 font-semibold">travelers details</h1>

          <div>
            {" "}
            {paxInfo?.adults?.map((pax) => {
              return (
                <div key={pax.id} className="ml-8 m-3">
                  <p>
                    <span className="text-sm text-gray-800 pr-4">
                      Full Name:
                    </span>
                    {pax.firstName} {pax.lastName}
                  </p>

                  <p>
                    <span className="text-sm text-gray-800 pr-4">
                      Passport No:
                    </span>
                    {pax.passportNum}
                  </p>
                  <p>
                    <span className="text-sm text-gray-800 pr-4">
                      Passport Expiry:
                    </span>
                    {pax.passportExpiryDate}
                  </p>
                  <div className="border-b border-gray mt-2 last:border-none"></div>
                </div>
              );
            })}
          </div>
          <div>
            {" "}
            {paxInfo?.children?.map((pax) => {
              return (
                <div key={pax.id} className="ml-8 m-3">
                  <p>
                    <span className="text-sm text-gray-800 pr-4">
                      Full Name:
                    </span>
                    {pax.firstName} {pax.lastName}
                  </p>

                  <p>
                    <span className="text-sm text-gray-800 pr-4">
                      Passport No:
                    </span>
                    {pax.passportNum}
                  </p>
                  <p>
                    <span className="text-sm text-gray-800 pr-4">
                      Passport Expiry:
                    </span>
                    {pax.passportExpiryDate}
                  </p>
                  <div className="border-b border-gray mt-2 last:border-none"></div>
                </div>
              );
            })}
          </div>
          <div>
            {" "}
            {paxInfo?.infants?.map((pax) => {
              return (
                <div key={pax.id} className="ml-8 m-3">
                  <p>
                    <span className="text-sm text-gray-800 pr-4">
                      Full Name:
                    </span>
                    {pax.firstName} {pax.lastName}
                  </p>

                  <p>
                    <span className="text-sm text-gray-800 pr-4">
                      Passport No:
                    </span>
                    {pax.passportNum}
                  </p>
                  <p>
                    <span className="text-sm text-gray-800 pr-4">
                      Passport Expiry:
                    </span>
                    {pax.passportExpiryDate}
                  </p>

                  <div className="border-b border-gray mt-2 last:border-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
