import React, { useEffect, useState } from 'react'
// import './Greet.css'

const Greet = () => {
    const [greetMsg, setgreetMSG] = useState('')
    let t = new Date().getHours()
    useEffect(() => {
        if(t<12){
            setgreetMSG("Good Morning!")
        }
        else if (t>12 && t<16){
            setgreetMSG("Good Afternoon!")
        }
        else{
            setgreetMSG("Good Evening!")
        }
        // setgreetMSG(greeting)
    }, [t]
    )
    return (
        <div style={{
            display:'flex',
            width:'200px',
            flexDirection:'column',
            backgroundColor:'black',
            fontSize:'20px',
            padding:'10px',
            color:'white',
            borderRadius:'10px',
            justifyContent:'center'
        }}>
            {greetMsg}
        </div>
    )
}

export default Greet