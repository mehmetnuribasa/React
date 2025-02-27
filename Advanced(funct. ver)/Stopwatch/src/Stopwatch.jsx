import React, {useState, useRef, useEffect} from "react";
import "./Stopwatch.css";

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);  //millisecond

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning) {
            // setInterval(callback, interval) //callback:function  interval: time in miliseconds to repeat this interval.
            
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }
        
        //only cleaning
        //This is required for stopping.
        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        console.log(startTimeRef.current);
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60)  % 60);  //%60 for demonstration
        let seconds = Math.floor(elapsedTime / 1000  %60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);   //% 1000 for demonstration, and / 10 for 2-digit demonstration

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");
        
        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }


    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>

            <div className="controls">
                <button className="start-button" onClick={start}>Start</button>
                <button className="stop-button" onClick={stop}>Stop</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;