import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className='relative '>{children}</main>
      <Footer />
    </>
  );
}

export default AppLayout;
