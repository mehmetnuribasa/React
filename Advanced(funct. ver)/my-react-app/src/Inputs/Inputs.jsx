import React, {useState} from "react";
import './Inputs.css';

function Inputs() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");


    function handleNameChange(event) {
        setName(event.target.value);
    }

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }
    
    function handleShippingChange(event) {
        setShipping(event.target.value);
    }


    return(
        <div>
            {/* value is the predefined value for the input.*/}
            {/* React creates the event parameters and sends to the handle functions. automatically.(onChange event) */}
            <input value={name} onChange={handleNameChange} type="text"/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>


            {/* '===' STRICT EQUALITY   Compares both the value and the type*/}
            {/* '==' LOOSE EQUALITY   Compares only the values*/}

            <label>
                <input type="radio"
                value="Pick Up"
                checked={shipping === "Pick Up"}    //will be true if shipping is "Pick Up"
                onChange={handleShippingChange} />  {/*updates the shipping state */}
                Pick Up
            </label>

            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}></input>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>

        </div>
    );

}

export default Inputs