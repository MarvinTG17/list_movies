
export async function getMovies(search) {
  try {
    //console.log('4. moviesService — search:', search);

    const response = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`);
    const jsonResponse = await response.json();
    //console.log('jsonResponse:', jsonResponse);

    const movies = jsonResponse.Search;
    //console.log('movies:', movies);

    if (!Array.isArray(movies) || movies.length === 0) {
      return [];
    }

    return movies.map((movie) => ({
      id:     movie.imdbID,
      title:  movie.Title,
      year:   movie.Year,
      image:  movie.Poster,
    }));
  } catch (error) {
    throw new Error(error);
  }

}
