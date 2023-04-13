import React from "react";
import AppLayout from "../../components/Layout/AppLayout";
import FlightsList from "../../components/Flights/FlightsList";
import axios from "axios";

const Flights = ({ flights }) => {
  return (
    <AppLayout>
      <main className=' lg:w-[1232px] mx-auto  mt-10 mb-40 sm:mb-60 '>
        <FlightsList flights={flights} />
      </main>
    </AppLayout>
  );
};

export default Flights;

export async function getServerSideProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/flights?populate=*`,
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
