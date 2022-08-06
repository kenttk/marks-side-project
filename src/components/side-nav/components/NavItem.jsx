import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ route, text, icon }) => {
    return (
        <NavLink
            to={route}
            className="text-white px-2 py-4 flex items-center"
        >
            {icon}
            <span>
                {text}
            </span>
        </NavLink>
    );
}

export default NavItem;