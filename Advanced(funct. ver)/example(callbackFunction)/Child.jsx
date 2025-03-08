import React, {useState} from "react";
import PropTypes from "prop-types";

// here, we used props with 'destructuring method'.
function Child({sendMessage}) {

    const [input, setInput] = useState("");

    handleInputChange = (e) => {
        setInput(e.target.value);
    }

    handleButttonClick = () => {

        // Child component sends a data to parent component
        sendMessage(input);
    }

    return(
        <div>
            <h2>Child Component</h2>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
            />

            <button onClick={handleButttonClick}>Send Message</button>
        </div>
    );
}

Child.propTypes = {
    sendMessage: PropTypes.func,
}

Child.defaultProps = {
    sendMessage: () => console.log("Default sendMessage function run."),
}

export default Child;