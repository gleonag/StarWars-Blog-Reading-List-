const getCardPeople = async () => {

    const data = await fetch("https://www.swapi.tech/api/people/1")
    const {results} = await data.json()
return results
}
export default getCardPeople;