import React, {useState} from 'react'
import './Counter.css'

function Counter() {

    //useState funct. returns array that has two elements.
    //One of them is a variable other is a setter function.
    const [count, setCount] = useState(0);

    //Using a function expression (or arrow function) ties the function directly to the current component's state and avoids any issues with hoisting or stale closures:
    //ARROW FUNCTİONS (true)
    //Arrow functions do not create their own this context. Therefore, arrow functions inherit this from the context in which they are written.
    const increment = () => {
        setCount(count + 1);
    }
    
    //FUNCTION EXPRESSION (true)
    // const increment = function() {
    //     setCount(count+1);
    // }


    //it could potentially cause issues on re-renders because the increment function might "capture" the wrong count value due to how React deals with closures.
    //FUNCTION DECLERATION (false)
    // function increment() {
    //     setCount(count+1);
    // }


    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment}>Increment</button>
        </div>
    );

}

export default Counter