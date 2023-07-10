import { useState } from "react";
const SearchBar = ({ Data, setAllCountries, allCountries }) => {

    const [searchInput, setSearchInput] = useState("");


    const handleChange = (e) => {
        let inputValue = e.target.value.toLowerCase()
        if (!inputValue) {
            setSearchInput("")
            setAllCountries(Data)
        } else {
            let newFilteredCountry = Data.filter(country => (
                country.name.toLowerCase().includes(inputValue)
            ))
            setAllCountries(newFilteredCountry)
            setSearchInput(inputValue)
        }
    }


    return (
        <div className="search-bar-holder">
            <input value={searchInput} onChange={handleChange} type="text" className="search-bar" placeholder="Search Country"></input>
        </div >
    )
}

export default SearchBar