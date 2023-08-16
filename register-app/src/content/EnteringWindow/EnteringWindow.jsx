import React from "react";
import { NavLink } from "react-router-dom";

const EnteringWindow = () => {
    return(
        <div>
            <ul>
                <li>
                    <NavLink to='/login'>
                        Login
                    </NavLink>
                </li>
                <li>
                <NavLink to='/signin'>
                        Signin
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default EnteringWindow;