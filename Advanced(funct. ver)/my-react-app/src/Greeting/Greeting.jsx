import './Greeting.css'
import Proptypes from 'prop-types'

function Greeting(props) {

    const WelcomeMessage =  <h2 className="welcome-message">
                                Welcome {props.username}
                            </h2>
    
    const loginPrompt =     <h2 className="login-prompt">
                                Please log in to continue
                            </h2>

    return(props.isLoggedIn ? WelcomeMessage : loginPrompt);
}

Greeting.proptypes = {
    isLoggedIn: Proptypes.bool,
    username: Proptypes.string,
}

//For Default Props, we can use this way.
// function Greeting({ name = "Guest" }) {
//     return <h1>Hello, {name}!</h1>;
// }


Greeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default Greeting