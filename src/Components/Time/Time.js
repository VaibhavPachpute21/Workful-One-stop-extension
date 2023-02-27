import React, { useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiTime } from 'react-icons/bi'

const Time = () => {
  const [currentTime, setCurrentTime] = useState('')
  let now = new Date();
  let date = now.toDateString()

  const updatTime = () => {
    let minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
    let hours = now.getHours() < 10 ? "0" + now.getHours() : now.getHours()
    let time = hours + ":" + minutes
    setCurrentTime(time)
  }

  setTimeout(updatTime, 1000);



  return (
    <div style={{
      border: '2px solid white', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      width: '170px', height: '55px', backgroundColor: 'black', color: 'white', padding: '10px',
      borderRadius: '10px', fontSize: '18px',
    }}>
      <div style={{ display: 'block', alignItems: 'center', verticalAlign: 'middle' }}>
        <AiOutlineCalendar style={{ fontSize: '18px', verticalAlign: 'middle' }} />&nbsp;
        {date}
      </div>

      <div style={{ display: 'block', alignItems: 'center', verticalAlign: 'middle' }}>
        <BiTime style={{ fontSize: '18px', verticalAlign: 'middle' }} />&nbsp;
        {currentTime}
      </div>

    </div>
  )
}

export default Time