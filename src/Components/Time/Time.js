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
      display:'flex',
      border:"2px solid white",
      flexDirection:'column',
      width:'200px',
      height:'100%',
      backgroundColor:'black',
      color:'white',
      fontSize:'22px',
      borderRadius:'10px',
      justifyContent:'center',
      padding:'5px'

    }}>
        <span >{date}</span>
        <div>{currentTime}</div>
    </div>
  )
}

export default Time