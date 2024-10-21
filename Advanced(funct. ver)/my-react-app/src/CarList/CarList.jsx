import React, {useState} from "react";
import './CarList.css'

function CarList() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        //if the parameter is wont use, can use '_'.
        //exp. here we can use '_' instead of the 'element'.
        setCars(c => c.filter((element, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    //Additional Knowledge
    // if we can accces the any inputs value:
    // document.getElementById("input's id").value

    return(
        <div className="carlist-container">
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((tempCar, index) =>
                    <li key={index} onDoubleClick={() => handleRemoveCar(index)}>
                        {tempCar.year} {tempCar.make} {tempCar.model}
                    </li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"/><br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );

}

export default CarList
