import React, { useState, useRef, useEffect } from 'react';


const Countdown = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');


    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('August 1, 2020 11:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = countdownDate - now;

            let days = Math.floor(timeLeft / (1000*60*60*24));
            let hours = Math.floor(timeLeft % (1000*60*60*24) / (1000*60*60));
            let minutes = Math.floor((timeLeft % (1000*60*60)) / (1000*60));
            let seconds = Math.floor((timeLeft % (1000*60)) / 1000);

            const array = [ days, hours, minutes, seconds ];
            const dateArray = [];
            array.forEach(item => 
                { return dateArray.push(('0'+item).slice(-2));
            }); 

            if (timeLeft < 0) {
                clearInterval(interval.current);
            } else {
                setDays(dateArray[0]);
                setHours(dateArray[1]);
                setMinutes(dateArray[2]);
                setSeconds(dateArray[3]);
            };
        }, 1000);
    };                           



    useEffect(() => {
        interval.current = true;
        if (interval.current) {
            startTimer();
            return () => {
                clearInterval(interval);
            }
        } 
    });



    return(
        <div id="countdown-container">
            <h2>We're starting in:</h2>
            <div id="countdown">
                <div id="timer" className="row">
                    <h1 className="col-sm">{days}</h1>
                    <span>:</span>
                    <h1 className="col-sm">{hours}</h1>
                    <span>:</span>
                    <h1 className="col-sm">{minutes}</h1>
                    <span>:</span>
                    <h1 className="col-sm">{seconds}</h1>
                </div>
            </div>
        </div>
    );
};

export default Countdown