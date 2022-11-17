import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <header className="header">
            <nav>
                <ul>
                    <li><Link to={"/"}>Add user</Link></li>
                    <li><Link to={"/users"}>Display users</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;