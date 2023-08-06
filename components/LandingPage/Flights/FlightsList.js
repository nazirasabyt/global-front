import React from "react";
import Filters from "./Filters/Filters";
import FilteredFlights from "./Filters/FilteredFlights";

const FlightsList = ({ data }) => {
  return (
    <div className='flex  gap-12'>
      <Filters />
      <FilteredFlights data={data} />
    </div>
  );
};

export default FlightsList;
