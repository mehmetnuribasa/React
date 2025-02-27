import React, {useState, useEffect} from "react";
import "./DigitalClock.css";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        // setInterval(callback, interval) //callback:function  interval: time in miliseconds to repeat this interval.
        // 1000 milliseconds = 1 seconds

        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // For cleaning
        return () => {
            clearInterval(intervalId);
        }

    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = (hours >= 12) ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <span className="clock">
                {/* if function has a return value, must be used "()" after the function name. Otherwise not need. */}
                {formatTime()}
            </span>
        </div>
    );
}

export default DigitalClock;