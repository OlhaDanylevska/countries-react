import { useState } from "react"
import SearchBar from "./SearchBar"
import FilterRegion from "./FilterRegion"

const CountryCard = ({ Data }) => {
    const [allCountries, setAllCountries] = useState(Data)


    // const fetchImage = () => {
    //     fetch("https://restcountries.com/v3.1/all")
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error(response.status)
    //             } else {
    //                 return response.json()
    //             }
    //         })
    //         .then((data) => {
    //             if (data) {
    //                 setAllCountries(data)
    //                 setFilteredCountries(data)
    //             }
    //         })
    // }

    // useEffect(() => {
    //     fetchImage()
    // }, []);

    return (
        <div className="page-holder">
            <div className="header">
                <SearchBar Data={Data} allCountries={allCountries} setAllCountries={setAllCountries} />
                <FilterRegion Data={Data} setAllCountries={setAllCountries} />
            </div>

            <div className="cards-container">

                {allCountries.map(country => (
                    < div key={country.id} className="card" >
                        <img alt="flag" src={country.flags.svg} className="flag-image" />
                        <div className="text-holder" >
                            <h3>{country.name}</h3>
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
        </div>

    )
}

export default CountryCard