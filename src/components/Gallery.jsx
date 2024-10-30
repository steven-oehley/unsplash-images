import { useEffect, useRef } from "react";
import { useSearch } from "../context/useSearch";
import { useFetchImages } from "../queries/QueryHooks";

const Gallery = () => {
  const { search } = useSearch();
  const { data, isLoading, isError } = useFetchImages(search);

  // Create a ref for the gallery container
  const galleryRef = useRef(null);

  // Scroll to the top when `search` changes
  useEffect(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [search]);

  if (isError)
    return (
      <div role="alert" className="alert alert-error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Error! Fetching data failed.</span>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-96">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  return (
    <section className="section grid grid-cols-3 gap-4 overflow-y-scroll h-[580px]">
      {data.data.results.map((img) => (
        <div className="shadow-xl" key={img.id}>
          <figure>
            <img
              src={img.urls.small}
              alt={img.alt_description}
              className="rounded-2xl "
            />
          </figure>
        </div>
      ))}
    </section>
  );
};
export default Gallery;
