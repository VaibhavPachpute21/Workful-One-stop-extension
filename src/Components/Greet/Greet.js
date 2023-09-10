import React, { useEffect, useState } from 'react'
import { BsAlarm } from 'react-icons/bs'
import { BiAlarmOff } from 'react-icons/bi'
const Greet = () => {
    const [greetMsg, setgreetMSG] = useState('')
    const [quote, setQuote] = useState('')
    let t = new Date().getHours()
    let [alarmOn, setAlarmOn] = useState(true);


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

    useEffect(() => {
        const storedAlarmOn = localStorage.getItem('alarmOn');
        if (storedAlarmOn !== null) {
            setAlarmOn(storedAlarmOn === 'true'); // Convert the string to a boolean
        }
    }, []);


    async function getQuotes() {
        try {
            const response = await fetch('https://type.fit/api/quotes');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex].text;
            setQuote(randomQuote);
        } catch (error) {
            console.error('Error fetching quotes:', error);
        }
    }

    const toggleAlarm = () => {
        if (alarmOn) {
            chrome.runtime.sendMessage({ clearAlarm: true }, function (response) {
                console.log(response);
            });
            setAlarmOn(false);
            localStorage.setItem('alarmOn', 'false');
        } else {
            chrome.runtime.sendMessage({ time: "1" }, function (response) {
                console.log(response);
            });
            setAlarmOn(true);
            localStorage.setItem('alarmOn', 'true');
        }
    };




    return (
        <div style={{
            display: 'flex', width: '400px', flexDirection: 'column', backgroundColor: '#4169e1',
            fontSize: '20px', padding: '10px', color: 'white', borderRadius: '10px',
            justifyContent: 'center', border: '1px solid white', fontFamily: 'serif',
        }}>
            <div
                style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', }}
            >{greetMsg}</div>
            <div
                style={{ fontSize: '16px', fontWeight: '500', color: 'white' }}
            >{quote.toString()}</div>
            <button onClick={() => { toggleAlarm() }}
                style={{
                    position: 'absolute', float: 'right', right: '20px', cursor: 'pointer'
                }}>
                {alarmOn ? <BiAlarmOff /> : <BsAlarm />}
            </button>

        </div>
    )
}

export default Greet