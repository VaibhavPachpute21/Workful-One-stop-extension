import React, { useState } from 'react'

const Time = () => {
    const [currentTime,setCurrentTime]=useState('')
    let now =new Date();
    let date=now.toDateString()
    
    const updatTime=()=>{
        let minutes=now.getMinutes()<10 ? "0"+now.getMinutes():now.getMinutes()
        let hours=now.getHours() <10? "0"+now.getHours():now.getHours()
        let time=hours +":"+ minutes
        setCurrentTime(time)
    }

    setTimeout(updatTime,1000);



  return (
    <div style={{
      border:'2px solid white',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      width:'200px',
      height:'50px',
      backgroundColor:'black',
      color:'white',
      padding:'10px',
      borderRadius:'10px',
      fontSize:'20px',
    }}>
        <span >{date}</span>
        <div>{currentTime}</div>
    </div>
  )
}

export default Time