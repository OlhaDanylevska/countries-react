
const SeparateCountryCard = ({ Data, pickedCountry, setPickedCountry }) => {
    console.log({ Data })

    const handleBorderCountryClick = (code) => {
        setPickedCountry(code)
    }

    return <div className="sep-container">

        {Data.map(country => {
            if (country.name === pickedCountry) {
                return (
                    <div className="separate-card">
                        <div className="sep-image-holder">
                            <img src={country.flags.svg}></img>
                        </div>

                        <div className="text-block">
                            <h2>{country.name}</h2>
                            <div className="holder-for-tables">
                                <table>
                                    <tbody>
                                        <tr>
                                            <th className="key">Native Name</th>
                                            <th className="value" >{country.nativeName}</th>
                                        </tr>
                                        <tr>
                                            <th className="key">Population</th>
                                            <th className="value">{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</th>
                                        </tr>
                                        <tr>
                                            <th className="key">Region:</th>
                                            <th className="value">{country.region}</th>
                                        </tr>
                                        <tr>
                                            <th className="key">Subregion</th>
                                            <th className="value">{country.subregion}</th>
                                        </tr>
                                        <tr>
                                            <th className="key">Capital</th>
                                            <th className="value">{country.capital}</th>
                                        </tr>
                                        <tr>
                                            <th className="key">Top Level Domain</th>
                                            <th className="value">{country.topLevelDomain[0]}</th>
                                        </tr>
                                        <tr>
                                            <th className="key">Currencies</th>
                                            <th className="value">{country.currencies[0].name}</th>
                                        </tr>
                                        <tr>
                                            <th className="key">Languiges</th>
                                            <th className="value">{country.languages.map(language => {
                                                return (
                                                    <li className="languages">{language.name}</li>
                                                )
                                            })}</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="counties-border">{
                                country.borders &&
                                country.borders.map(border => (

                                    Data.map((country) => (
                                        country.alpha3Code === border && <button onClick={() => handleBorderCountryClick(country.name)}>{country.name}</button>
                                    ))
                                ))
                            }</div>

                        </div>
                    </div>
                )
            }
        })
        }



    </div>
}
export default SeparateCountryCard
