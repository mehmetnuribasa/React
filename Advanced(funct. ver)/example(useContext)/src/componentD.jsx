import React, {useContext} from "react";
import { UserContext } from "./componentA.jsx";

function componentD() {

    // CONSUMER COMPONENT
    const user = useContext(UserContext);

    return(
        <div className="box">
            <h1>component D</h1>

            <h4>{`Bye ${user}`}</h4>
        </div>
    );

}

export default componentD;