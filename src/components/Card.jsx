
function CardBody({movie}) {
    return (
        <div className="card-body">
            <h6>{movie.title}</h6>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title}  />
        </div>
    )
}

function Card({movie}) {
    return ( 
        <div className="card">
            <CardBody movie={movie}/>
        </div>
    )
}

export default Card;