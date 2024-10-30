import { useContext } from "react";
import { SearchContext } from "./SearchProvider";

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch used outside of SearchProvider");
  return context;
};

export { useSearch };
