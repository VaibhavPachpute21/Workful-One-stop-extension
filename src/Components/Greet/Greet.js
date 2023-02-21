import React, { useEffect, useState } from 'react'


const Greet = () => {
    const [greetMsg, setgreetMSG] = useState('')
    // const [quote, setQuote] = useState('')
    let t = new Date().getHours()
    useEffect(async () => {
        if (t < 12) {
            setgreetMSG("Good Morning!")
        }
        else if (t > 12 && t < 16) {
            setgreetMSG("Good Afternoon!")
        }
        else {
            setgreetMSG("Good Evening!")
        }
        // getQuotes();
    }, [t]
    )


    // async function getQuotes() {
    //     await fetch(
    //         "https://type.fit/api/quotes")
    //         .then((res) => res.json())
    //         .then((json) => {
    //             const j = Math.floor(Math.random() * 1643)
    //             setQuote(json[j]['text']);
    //             console.log(json)
    //         })
    // }




    return (
        <div style={{
            display: 'flex',
            width: '200px',
            flexDirection: 'column',
            backgroundColor: 'black',
            fontSize: '20px',
            padding: '10px',
            color: 'white',
            borderRadius: '10px',
            justifyContent: 'center'
        }}>
            
            <div>{greetMsg}</div>
            {/* <div>{quote.toString()}</div> */}
            
        </div>
    )
}

export default Greet