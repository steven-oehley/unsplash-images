import { useSearch } from "../context/useSearch";

const SearchForm = () => {
  const { setSearch, input, setInput } = useSearch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);

    setInput("");
  };
  return (
    <section className="section">
      <form className="flex justify-center gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search For Images..."
          className="input input-bordered input-secondary w-full max-w-xs rounded-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-secondary rounded-2xl">Search</button>
      </form>
    </section>
  );
};
export default SearchForm;
