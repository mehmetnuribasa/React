// useEffect() = React Hook that tells React do some code when:
//               This component re-renders
//               This component mounts(creates)
//               This state of a value (when change)

// useEffect(function, [dependencies])

// 1. useEffect(() => {})           //  Runs after every re-renders
// 2. useEffect(() => {}, [])       //  Runs only on mount
// 3.useEffect(() => {}, [value])   //  Runs on mount + when value changes

// USES
// #1 Event listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from "react";

function MyComponent() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        // useEffect can also use for "return"
        return () => {
            //Some cleanup code
        }

    }, [count, color]);

    // we can slo use this way, but applies the changes every re-renders this is too much
    // document.title = `Count: ${count} ${color}`;

    function AddCount() {
        setCount(c => c + 1);
    }
    
    function SubtractCount() {
        setCount(c => c - 1);
    }

    function changeColor () {
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <div>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={AddCount}>Add</button>
            <button onClick={SubtractCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    );
}

export default MyComponent;