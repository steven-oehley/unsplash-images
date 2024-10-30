import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchProvider } from "./SearchProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const AppProvider = ({ children }) => {
  return (
    <SearchProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </QueryClientProvider>
    </SearchProvider>
  );
};

export { AppProvider };
