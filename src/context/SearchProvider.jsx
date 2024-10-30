import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("batman");
  return (
    <SearchContext.Provider value={{ search, setSearch, input, setInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
