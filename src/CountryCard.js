import { useState } from "react"
import SearchBar from "./SearchBar"
import FilterRegion from "./FilterRegion"
import SeparateCountryCard from './SeparateCountryCard';


const CountryCard = ({ Data }) => {
    const [allCountries, setAllCountries] = useState(Data)
    const [pickedCountry, setPickedCountry] = useState("")

    const handleCardClick = (country) => {
        setPickedCountry(country.name)
        console.log(pickedCountry)
    }

    return (
        <div className="page-holder">
            <div className="header-holder">
                <div className="container-for-sep-card">
                    < SeparateCountryCard Data={Data} pickedCountry={pickedCountry} setPickedCountry={setPickedCountry} />
                </div>
                <div className="header">
                    <SearchBar Data={Data} setAllCountries={setAllCountries} />

                    <FilterRegion Data={Data} setAllCountries={setAllCountries} />
                </div>


            </div>

            <div className="cards-container">

                {allCountries.map(country => (
                    < div key={country.id} className="card" onClick={() => handleCardClick(country)}>
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