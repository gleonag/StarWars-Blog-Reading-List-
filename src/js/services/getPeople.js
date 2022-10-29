
const getPeople = async () => {

        const data = await fetch("https://www.swapi.tech/api/people/")
        const {results} = await data.json()
    return results
}
export default getPeople;