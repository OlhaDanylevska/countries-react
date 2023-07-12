import './App.css';
import CountryCard from "./CountryCard.js"
import Data from "./countriesAll.json"

function App() {
  console.log({ Data })
  return (
    <div className="App">

      <CountryCard Data={Data} />
    </div>
  );
}

export default App;
