import List from "./components/List.jsx";
import Form from "./components/Form.jsx";
import useMovies from "./hooks/useMovies";
import "./App.css";

function App() {
  const { movies, searchMovies } = useMovies();

  const handleSearch = (search) => {
    //console.log('2. Form - search: ',search);
    searchMovies(search);
  };

  return (
    <div className="page_main">
      <h1>Películas</h1>
      <h6>Catálogo de películas</h6>
      <Form onSearch={handleSearch} />
      <List movies={movies} />
    </div>
  );
}

export default App;
