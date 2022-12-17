import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/skills">Skills</Link>
            </li>
        </div>
        );
}

export default Navbar;