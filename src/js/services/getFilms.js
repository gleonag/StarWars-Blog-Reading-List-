
const getFilms = async () => {
    const data = await fetch ("https://www.swapi.tech/api/films/")
    const {results} = await data.json
    
    return results
    
}