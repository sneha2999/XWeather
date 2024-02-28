
import React,{useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [city,setCity] = useState("");
  const handleSearch = (searhCty)=>{
    setCity(searhCty)
  }
  return (
    <div className="App">
      <SearchBar onSearch={handleSearch}/>
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;
