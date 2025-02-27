import React, {useState, useEffect} from "react";

function MyComponent2() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);


    // without useEffect
    // This method runs every re-renders this is too much
    // window.addEventListener(event, function)    // function pattern

    // window.addEventListener("resize", handleResize);
    // console.log("Event listener added.");           //1000 Event listener added.


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added.");
        
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed.");
        }

    }, []); //because using this "[]", it will run only one time (when it is mounted firstly)


    function handleResize() {
        setWidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return(
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    );
}

export default MyComponent2;