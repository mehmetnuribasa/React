// useState() = Re-renders the component when the state value changes

// useRef()      = "use reference" does not cause re-renders when its value changes.
//                 when you want a component to "remember" some information,
//                 but you dont want that information to trigger new renders.

//      1. Accessing/Interacting with DOM elements
//      2. Handling focus, animations, and transitions
//      3. Managing timers and intervals


import React, {useState, useEffect, useRef} from "react";

function MyComponent() {

    // in this way, component will re-renders each time
    // let [number, setNumber] = useState(0);    

    const ref = useRef(0);

    console.log(ref);

    useEffect(() => {
        console.log("Component Rendered")
    });

    function handleClick() {
        // setNumber(n => n + 1);

        ref.current++;
        console.log(ref.current);
    }

    return(
        <div>
            <button onClick={handleClick}>
                Click me!
            </button>
        </div>
    );
}

export default MyComponent;