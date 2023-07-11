import './App.css';
import CountryCard from "./CountryCard.js"
import Data from "./countriesAll.json"
import SeparateCountryCard from './SeparateCountryCard';

function App() {
  console.log({ Data })
  return (
    <div className="App">
      <SeparateCountryCard Data={Data} />
      <CountryCard Data={Data} />
    </div>
  );
}

export default App;
