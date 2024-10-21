import React, {useState} from "react";

function FavoriteCar() {
    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"});

    function handleYearChange(event) {

        // //In this way appears only the year. (false)
        // setCar({year: event.target.value});

        // //spread operator(...)  (true)
        // setCar({...car, year: event.target.value});

        //UPDATER FUNCTION  (true)
        //c is previous car.
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
    }
    
    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
    }


    //UPDATER FUNCTİONS
    // a function passed as an argument to setState() usually ex. setYear(arrow funct.)
    // Allow for safe updates based on the previous state. Used with multiple state updates and asynchronous funct.
    
    // exp.
    // function increment() {
    //     // count  0
    //     setCount(count+1); // count 1
    //     setCount(count+1); // count 1
    //     setCount(count+1); // count 1

    //     // updater function.
    //     setCount(c => c+1); //count 1
    //     setCount(c => c+1); // count 2
    //     setCount(c => c+1); // count 3
    // }

    return(
        <div>
            <p>Your favorite car is {car.year} {car.make} {car.model}.</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br />
            <input type="text" value={car.make} onChange={handleMakeChange}/><br />
            <input type="text" value={car.model} onChange={handleModelChange}/><br />
        </div>
    );
}

export default FavoriteCar