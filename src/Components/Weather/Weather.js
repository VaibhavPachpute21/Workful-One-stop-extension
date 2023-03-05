import React, { useState } from 'react'

const Weather = () => {
  const [city, setCity] = useState('')

  const search = async () => {
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=effd4bde0cd98a15c81e617d6faf4e56`).then((response) => {
      response.json().then((results)=>{
        if(results.cod==200){
          console.log(results)
        }
        else{
          console.log(results)
        }
      });
      
    }
    )
  }


  return (
    <div>
        <input placeholder='Search for City' onChange={(e) => { setCity(e.target.value) }} type={'text'} />
        <button type='submit' onClick={search}>Search</button>
    </div>
  )
}

export default Weather