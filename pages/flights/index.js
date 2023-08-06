import React from "react";
import FlightsList from "../../components/LandingPage/Flights/FlightsList";
import axios from "axios";

const Flights = ({ flights }) => {
  return (
    <main className=' lg:w-[1232px] mx-auto  mt-10 mb-40 sm:mb-60 '>
      <FlightsList data={flights} />
    </main>
  );
};

export default Flights;

export async function getServerSideProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/flights?populate=*`,
    {
      headers: {
        Authorization: "bearer" + process.env.NEXT_APP_API_TOKEN,
      },
    }
  );

  return {
    props: {
      flights: res.data,
    },
  };
}
