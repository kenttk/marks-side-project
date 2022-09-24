import React from "react";
import { Link } from "react-router-dom"; 
/*is an element that lets the user navigate to another page by clicking or tapping on it.
In react-router-dom, a <Link> renders an accessible <a> element with a real href that points 
to the resource it's linking to. */

const SideNavItem = ({ title, icon, route }) => {
    return ( 
        <Link
            className="flex items-center fill-[#b3b3b3] text-[#b3b3b3] pb-2 px-4 cursor-pointer gap-2.5 hover:text-white hover:fill-white"
            to={route}
        >
            {icon} {title}
        </Link>
    );
}

export default SideNavItem;