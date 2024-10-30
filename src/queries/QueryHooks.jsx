import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./customInstance";

const useFetchImages = (search) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", search],
    queryFn: () =>
      axiosInstance.get(
        `/search/photos?page=1&per_page=12&orientation=landscape&query=${search}`
      ),
  });

  return { data, isLoading, isError };
};

export { useFetchImages };
