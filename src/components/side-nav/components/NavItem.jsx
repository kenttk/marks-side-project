import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ route, text }) => {
    return (
        <NavLink
            to={ route }
            className="text-white"
        >
            {text}
        </NavLink>
    );
}

export default NavItem;