import React from "react";
import SearchForm from "./Flights/SearchForm";
import styles from "../../styles/LandingPage.module.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Travel from "./Places/Travel";

const LandingPage = () => {
  return (
    <>
      <div className='bg-dimWhite w-full overflow-hidden'>
        <div className='flex justify-center items-center'>
          <div className={styles.boxWidth}>
            <Navbar />
          </div>
        </div>

        <div className='bg-dimWhite flex justify-center items-center '>
          <div className={styles.boxWidth}>
            {" "}
            <div className='bg-hero-pattern bg-cover bg-no-repeat h-[200px] sm:h-[499px] w-full mx-auto'></div>
          </div>
        </div>

        <div className='bg-dimWhite flex justify-center items-center sm:px-16 px-6'>
          <div className={styles.boxWidth}>
            <SearchForm />
            <section className='flex flex-col my-10 '>
              <div className='lg:w-[1232px] mx-auto mb-6 '>
                <h1 className='text-xl sm:text-4xl font-semibold mb-4'>
                  Let's go places together
                </h1>
                <p className='text-md'>
                  Discover the latest offers and news and start planning your
                  next trip with us.
                </p>
              </div>
              <div className='bg-section-map bg-contain sm:bg-cover bg-center mb-2  sm:mb-0 h-[220px] sm:h-[486px] w-full'></div>
            </section>
            <Travel />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
