const FilterRegion = ({ Data, setAllCountries, setDarkMode, darkMode }) => {

    const handleChange = (e) => {
        if (e.target.value !== "") {
            let regionFilteredCountry = Data.filter((country) => {
                return country.region.toLowerCase() === e.target.value
            })
            setAllCountries(regionFilteredCountry)
        } else {
            setAllCountries(Data)
        }
    }

    return (
        <div>
            <label for="rerion-select">Choose Region</label>
            <select name="" id={darkMode ? "region-select-dark" : "region-select"} onChange={handleChange}>
                <option value="" selected>- Please Select Region -</option>
                <option value="asia" >Asia</option>
                <option value="africa">Africa</option>
                <option value="europe">Europe</option>
                <option value="americas">Americas</option>
                <option value="oceania">Australia/Oceania</option>
            </select>
        </div>
    )
}


export default FilterRegion