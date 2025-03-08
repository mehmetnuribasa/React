// Callback Functions
// In React, we use callback functions to send a data from child component to parent component.
import React, {useState} from 'react';
import Child from './Child.jsx';

function Parent() {
    const [message, setMessage] = useState("");

    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
    }

    return(
        <div>
            <h1>Parent Component</h1>
            <p>Message: {message}</p>

            {/* Send function to child component as a props */}
            <Child sendMessage={handleMessageChange}></Child>
        </div>
    );
}

export default Parent;