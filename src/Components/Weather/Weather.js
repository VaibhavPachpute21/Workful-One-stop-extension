import React, { useEffect, useState } from 'react'

const Weather = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({
    isSet: false,
    name: '',
    country: '',
    temp: '',
    feels: '',
    weather: '',
    weatherDes: '',
    icon: ''

  })

  useEffect(async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function show(pos) {
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&units=metric&appid=effd4bde0cd98a15c81e617d6faf4e56`).then((response) => {
          response.json().then((results) => {
            console.log(results)
            if (results.cod == 200) {
              setWeather({
                isSet: true,
                name: results.name,
                country: results.sys.country,
                temp: results.main.temp,
                weather: results.weather[0].main,
                weatherDes: results.weather[0].description,
                icon: results.weather[0].icon,
                feels: results.main.feels_like
              })
            }
            else {
              console.log(results)
            }
          });
        });
      });

    } else {
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Maharashtra&units=metric&appid=effd4bde0cd98a15c81e617d6faf4e56`).then((response) => {
        response.json().then((results) => {
          if (results.cod == 200) {
            setWeather({
              isSet: true,
              name: results.name,
              country: results.sys.country,
              temp: results.main.temp,
              weather: results.weather[0].main,
              weatherDes: results.weather[0].description,
              icon: results.weather[0].icon,
              feels: results.main.feels_like
            })
          }
          else {
            console.log(results)
          }
        });
      });
    }


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
            icon: results.weather[0].icon,
            feels: results.main.feels_like
          })
        }
        else {
          console.log(results)
        }
      });
    })

  }


  return (
    <div
      style={
        // weather.weather == 'Clouds' ? 
      {
        border: '2px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        width: '168px', height: 'max-content', padding: '10px', //backgroundColor: '#9DD5FF'
        backgroundImage:'linear-gradient(to bottom,#9DD5FF,#118AE3)',
        borderRadius: '10px', fontSize: '18px', color: 'white'
      } 
      // : weather.weather == 'Clear' ? {
      //   border: '2px solid black', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      //   width: '168px', height: 'max-content', padding: '10px', backgroundColor: '#9DD5FF', //backgroundImage: 'linear-gradient(to right, blue , red)',
      //   borderRadius: '10px', fontSize: '18px', color: 'white'
      // } : { backgroundColor: 'black' }
      }>
      <form onSubmit={search}>
        <input
        style={{backgroundColor:'#F7F8F9', border:'1px solid #DBE2E9 !important', borderRadius:'100px',padding:'5px',fontSize:'12px',zIndex:'999'}}
         placeholder='Search for City' onChange={(e) => { setCity(e.target.value) }} type={'text'} />
        {/* <button type='submit' onClick={search}>Search</button> */}
      </form>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
        style={{fontSize:'26px',fontWeight:'500'}}
        >{Math.trunc(weather.temp)}&#8451;</div>
        <div ><img style={{position:'absolute',paddingLeft:'20px',marginTop:'-20px',zIndex:'1'}} src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" /></div>
      </div>

      <div
      style={{fontSize:'22px',fontWeight:'500'}}      
      >{weather.weather}</div>
      <div
      style={{fontSize:'16px',fontWeight:'400',textTransform:'capitalize'}}      
      >{weather.weatherDes}</div>

      <div
      style={{fontSize:'16px',fontWeight:'400',textTransform:'capitalize'}}       
      >Feels like <strong>{Math.trunc(weather.feels)}&#8451;</strong></div>
      <div
      style={{fontSize:'20px',fontWeight:'400'}}      
      >{weather.name + ' ' + weather.country}</div>





    </div>
  )
}

export default Weather