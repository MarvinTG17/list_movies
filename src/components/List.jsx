import Card from "./Card";

function List({movies}) {
    //console.log('6. List — movies:', movies);

    //la primera vez que carga la pagina
    if (movies === null) return null;

    if (movies.length === 0) {
        //cuando no encuentre pelicula
        return <p className="">No se encontraron películas.</p>;
    }

    return (
        <div className="card-bloque">
            {
                movies.map( (movie) => (
                    <Card
                        key={movie.id} 
                        movie={movie}
                    />
                ) ) 
            }
        </div>
    )

}

export default List;

