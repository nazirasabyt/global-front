import React from "react";
import FlightsList from "../../components/LandingPage/Flights/FlightsList";
import axios from "axios";
import Navbar from "../../components/LandingPage/Navbar";

const Flights = ({ flights }) => {
  return (
    <>
      <Navbar />
      <main className=' lg:w-[1232px] mx-auto  mt-10 mb-40 sm:mb-60 '>
        <FlightsList data={flights} />
      </main>
    </>
  );
};

export default Flights;

export async function getServerSideProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/flights?populate=*`
  );

  return {
    props: {
      flights: res.data,
    },
  };
}
