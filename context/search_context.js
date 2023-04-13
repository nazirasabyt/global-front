import React, { useState } from "react";
import { getLocalStoragePax } from "../utils/helpers";

const initialContext = {
  searchForm: getLocalStoragePax(),
  persistSearchFlight: () => {},
};

const SearchContext = React.createContext(initialContext);

export const SearchProvider = ({ children }) => {
  const [searchForm, setSearchForm] = useState(getLocalStoragePax());
  const persistSearchFlight = (formData) => {
    setSearchForm(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <SearchContext.Provider value={{ searchForm, persistSearchFlight }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
