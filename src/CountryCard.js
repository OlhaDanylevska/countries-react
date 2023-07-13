import { useState } from "react"
import SearchBar from "./SearchBar"
import FilterRegion from "./FilterRegion"
import SeparateCountryCard from './SeparateCountryCard';


const CountryCard = ({ Data }) => {
    const [allCountries, setAllCountries] = useState(Data)
    const [pickedCountry, setPickedCountry] = useState("")
    const [darkMode, setDarkMode] = useState(false)

    const handleCardClick = (country) => {
        setPickedCountry(country.name)
        console.log(pickedCountry)
        setAllCountries([])
    }

    return (
        <div className={darkMode ? "page-holder-dark" : "page-holder"}>
            <div className="nav-bar">
                <h3>Where in the World?</h3>
                <div className="dark-mode">
                    <img alt="moon-icon" src="https://static.thenounproject.com/png/4157080-200.png"></img>
                    <span onClick={() => setDarkMode(!darkMode)} style={darkMode ? { color: "white" } : { colour: "black" }} >Dark Mode</span>
                </div>
            </div>
            <div className="header-holder">
                <div className="header">
                    <SearchBar setDarkMode={setDarkMode} darkMode={darkMode} Data={Data} setAllCountries={setAllCountries} />

                    <FilterRegion setDarkMode={setDarkMode} darkMode={darkMode} Data={Data} setAllCountries={setAllCountries} />
                </div>

                <div className="container-for-sep-card">
                    < SeparateCountryCard setAllCountries={setAllCountries} Data={Data} pickedCountry={pickedCountry} setPickedCountry={setPickedCountry} darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </div>

            <div className="cards-container">

                {allCountries.map(country => (
                    < div key={country.id} className={darkMode ? "card-dark" : "card"} onClick={() => handleCardClick(country)}>
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