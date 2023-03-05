import React, { useState } from 'react'

const Weather = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({
    isSet:false,
    name: '',
    country: '',
    temp: '',
    weather: '',
    weatherDes: '',
    icon:''

  })

  const search = async (e) => {
    e.preventDefault();
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=effd4bde0cd98a15c81e617d6faf4e56`).then((response) => {
      response.json().then((results) => {
        if (results.cod == 200) {
          console.log(results)
          setWeather({
            isSet:true,
            name: results.name,
            country: results.sys.country,
            temp: results.main.temp,
            weather: results.weather[0].main,
            weatherDes: results.weather[0].description,
            icon:results.weather[0].icon


          })
        }
        else {
          console.log(results)
        }
      });

    }
    )
  }


  return (
    <div>
      <form onSubmit={search}>
        <input placeholder='Search for City' onChange={(e) => { setCity(e.target.value) }} type={'text'} />
        <button type='submit' onClick={search}>Search</button>
      </form>

      <div>{weather.temp}
      {weather&& weather.weather +','+ weather.weatherDes} 
      </div>
      <div>
        {weather && weather.name +','+weather.country} 
        
        <img src={weather && `http://openweathermap.org/img/wn/${weather.icon}@4x.png`} />

      </div>
    </div>
  )
}

export default Weather