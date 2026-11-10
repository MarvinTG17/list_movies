import { useState, useRef } from "react";
import { getMovies } from "../services/moviesService";

export default function useMovies() {
  const [movies, setMovies] = useState(null);
  const previousSearch = useRef(null);

  const searchMovies = (search) => {
    //console.log('3. useMovies — search:', search);
    if (!search) return;
    
    //console.log(previousSearch.current);
    if (previousSearch.current === search) return;

    previousSearch.current = search;

      getMovies(search).then((data) => {
      //console.log('5. useMovies — data:', data);
      setMovies(data);
    });
  };

  return { movies, searchMovies };
}
