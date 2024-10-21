import React, {useState} from "react"
import './ColorPicker.css'

function ColorPicker() {

    const [bacColor, setBacColor] = useState('#FFFFFF');
    const [color, setColor] = useState('#FFFFFF');

    function handleBacColorChange(event) {
        setBacColor(event.target.value);
    }


    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return(
        <div className="colorpicker-container">
            <h1 className="colorpicker-logo">Color Picker</h1>
            <div className="color-display" style={{backgroundColor: bacColor, color: color}}>
                <p>Selected Background Color: {bacColor}</p>
                <p>Selected writing Color: {color}</p>
            </div>

            <label className="colorpicker-label">Select a background color: </label>
            <input type="color" value={bacColor} onChange={handleBacColorChange}/>

            <label className="colorpicker-label">Select a color: </label>
            <input type="color" value={color} onChange={handleColorChange}/>

        </div>
    );

}

export default ColorPicker