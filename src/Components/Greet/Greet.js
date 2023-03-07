import React, { useEffect, useState } from 'react'


const Greet = () => {
    const [greetMsg, setgreetMSG] = useState('')
    const [quote, setQuote] = useState('')
    let t = new Date().getHours()


    useEffect(() => {
        if (t < 12) {
            setgreetMSG("Good Morning!")
        }
        else if (t > 12 && t < 16) {
            setgreetMSG("Good Afternoon!")
        }
        else {
            setgreetMSG("Good Evening!")
        }
        getQuotes();
    }, [t])


    async function getQuotes() {
        await fetch(
            "https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((json) => {
                const j = Math.floor(Math.random() * 1643)
                setQuote(json[j]['text']);
            })
    }




    return (
        <div style={{
            display: 'flex',
            width: '400px',
            flexDirection: 'column',
            backgroundColor: '#4169e1',
            fontSize: '20px',
            padding: '10px',
            color: 'white',
            borderRadius: '10px',
            justifyContent: 'center',
            border:'1px solid white',
            fontFamily:'serif',
        }}>

            <div
                style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', }}
            >{greetMsg}</div>
            <div
                style={{ fontSize: '16px', fontWeight: '500', color: 'white' }}
            >{quote.toString()}</div>

        </div>
    )
}

export default Greet