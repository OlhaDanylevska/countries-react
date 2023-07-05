import { useState, useEffect } from "react"

const CountryCard = () => {
    const [allCountries, setAllCountries] = useState([])

    const fetchImage = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status)
                } else {
                    return response.json()
                }
            })
            .then((data) => {
                if (data) {
                    console.log(data)
                    setAllCountries(data)
                }
            })
    }

    useEffect(() => {
        fetchImage()
    }, [])
    return (
        <div className="cards-container">
            {allCountries.map(country => (
                < div key={country.id} className="card" >
                    <img src={country.flags.svg} className="flag-image" />
                    <div className="text-holder" >
                        <h3>{country.name.common}</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <th className="key">Population:</th>
                                    <th className="value">{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
                                </tr>
                                <tr>
                                    <th className="key">Region:</th>
                                    <th className="value">{country.region}</th>
                                </tr>
                                <tr>
                                    <th className="key">Capital:</th>
                                    <th className="value">{country.capital}</th>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CountryCard