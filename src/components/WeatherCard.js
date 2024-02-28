import React from 'react'

function WeatherCard({title,data}) {
  return (
    <div className='weather-card'>
        <h3>{title}</h3>
        <h3>{data}</h3>
    </div>
  )
}

export default WeatherCard