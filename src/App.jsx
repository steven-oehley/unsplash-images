import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import ThemeToggle from "./components/ThemeToggle.jsx";

const App = () => {
  return (
    <div className="h-screen">
      <ThemeToggle />
      <h1 className="text-center text-6xl text-accent mb-12">
        Get Images <span className="text-7xl">📸</span>
      </h1>
      <SearchForm />
      <Gallery />
    </div>
  );
};
export default App;
