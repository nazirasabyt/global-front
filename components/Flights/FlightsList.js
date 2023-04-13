import React from "react";
import Filters from "./Filters/Filters";
import FilteredFlights from "./Filters/FilteredFlights";

const FlightsList = ({ flights }) => {
  return (
    <div className="flex  gap-12">
      <Filters />
      <FilteredFlights flights={flights} />
    </div>
  );
};

export default FlightsList;
