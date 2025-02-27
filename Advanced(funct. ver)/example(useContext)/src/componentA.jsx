// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props through each level
// we can use useContext() instead of using propsthrough each level



import React, {useState, createContext} from "react";
import ComponentB from "./componentB.jsx";

export const UserContext = createContext();

function componentA() {

    const [user, setUser] = useState("Mehmet");

    return(
        <div className="box">
            <h1>component A</h1>

            {/* the same thing */}
            {/* <h4>Hello {user}</h4> */}
            
            <h4>{`Hello ${user}`}</h4>

            {/* PROVIDER COMPONENT */}
            <UserContext.Provider value={user}>
                <ComponentB/>
            </UserContext.Provider>
        </div>
    );

}

export default componentA;