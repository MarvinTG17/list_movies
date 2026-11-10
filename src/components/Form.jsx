

function Form( {onSearch} ) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataForm = new window.FormData(e.target);
        const fieldSearch = dataForm.get('nameMovie');
        //console.log('1.fieldSearch: ',fieldSearch); 
        onSearch(fieldSearch);
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input className="form-control" type="text" name="nameMovie" placeholder='Escribe una pelicula...' />
            <button className="btn btn-primary" type='submit'>Buscar</button>
        </form>
    )

}

export default Form;