import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({
    isSet: false,
    name: '',
    country: '',
    temp: '',
    weather: '',
    weatherDes: '',
    icon: ''

  })

  useEffect(async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Maharashtra&units=metric&appid=effd4bde0cd98a15c81e617d6faf4e56`).then((response) => {
      response.json().then((results) => {
        if (results.cod == 200) {
          console.log(results)
          setWeather({
            isSet: true,
            name: results.name,
            country: results.sys.country,
            temp: results.main.temp,
            weather: results.weather[0].main,
            weatherDes: results.weather[0].description,
            icon: results.weather[0].icon


          })
        }
        else {
          console.log(results)
        }
      });
    })

  }, [])

  const search = async (e) => {
    e.preventDefault();
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=effd4bde0cd98a15c81e617d6faf4e56`).then((response) => {
      response.json().then((results) => {
        if (results.cod == 200) {
          console.log(results)
          setWeather({
            isSet: true,
            name: results.name,
            country: results.sys.country,
            temp: results.main.temp,
            weather: results.weather[0].main,
            weatherDes: results.weather[0].description,
            icon: results.weather[0].icon


          })
        }
        else {
          console.log(results)
        }
      });
    })

  }


  return (
    <div style={weather.weather == 'Clouds' ? {
      border: '2px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      width: '168px', height: 'max-content', padding: '10px', backgroundColor: '#FFECAE',
      borderRadius: '10px', fontSize: '18px',
    } : weather.weather == 'Clear' ? {
      border: '2px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      width: '168px', height: 'max-content', padding: '10px', backgroundColor: '#9DD5FF', //backgroundImage: 'linear-gradient(to right, blue , red)',
      borderRadius: '10px', fontSize: '18px', color: 'white'
    } : {}}>
      <form onSubmit={search}>
        <input placeholder='Search for City' onChange={(e) => { setCity(e.target.value) }} type={'text'} />
        {/* <button type='submit' onClick={search}>Search</button> */}
      </form>

      <div>{weather.temp}</div>

      <div>{weather.weather + ',' + weather.weatherDes}</div>
      <div>{weather.name + ',' + weather.country}</div>

      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} height="50px" width="50px" alt="" />


    </div>
  )
}

export default Weather