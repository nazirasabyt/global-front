import ViewDetails from "../../../components/LandingPage/Flights/ViewDetails";

import axios from "axios";
import Navbar from "../../../components/LandingPage/Navbar";

const PassengerDetails = ({ flight }) => {
  return (
    <>
      {" "}
      <Navbar />
      <main className='w-full lg:w-[1232px] mx-auto mb-60 mt-12'>
        <ViewDetails flight={flight} />
      </main>
    </>
  );
};

export default PassengerDetails;

export async function getServerSideProps(context) {
  const id = context.params.id;

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/flights/${id}?populate=*`,
    {
      headers: {
        Authorization: "bearer" + process.env.NEXT_APP_API_TOKEN,
      },
    }
  );

  if (!res.data.data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      flight: res.data.data,
    },
  };
}
