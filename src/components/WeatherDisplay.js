import React, { useEffect, useState } from 'react'
import axios from 'axios';
import WeatherCard from './WeatherCard';

function WeatherDisplay({city}) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        if(city){
            setLoading(true)
            axios.get(`https://api.weatherapi.com/v1/current.json`,{
                params:{
                    key: "8efb664682834299899165209242802",
                    q:city
                }
            }).then((res)=>{
                setWeatherData(res.data)
            }).catch((error)=>{
                console.error("Error fetching data: ", error);
                alert("Failed to fetch weather data");
            }).finally(()=>{
                setLoading(false)
            })
        }
    },[city])
    return (
        <div className='weather-display'>
            {loading && <p>Loading data...</p>}
            {!loading && weatherData && (
                <div className="weather-cards">
                    <WeatherCard
                        title="Temperature"
                        data={`${weatherData.current.temp_c}°C`}
                    />
                    <WeatherCard
                        title="Humidity"
                        data={`${weatherData.current.humidity}%`}
                    />
                    <WeatherCard
                        title="Condition"
                        data={weatherData.current.condition.text}
                    />
                    <WeatherCard
                        title="Wind Speed"
                        data={`${weatherData.current.wind_kph} kph`}
                    />
                </div>
            )}
        </div>
    )
}

export default WeatherDisplay