import React from "react";
import { Link } from "react-router-dom"; 
/* is an element that lets the user navigate to another page by clicking or tapping on it.
In react-router-dom, a <Link> renders an accessible <a> element with a real href that points 
to the resource it's linking to. */

/* This hook returns the current 'location' object. This can be useful if
you'd like to perform some side effect whenver the current location changes. */
import { useLocation } from "react-router-dom";

const SideNavItem = ({ title, icon, route  }) => {
    let location = useLocation();

    console.log(location.pathname);
    
    
    /* Adding logic 'IF' and 'ELSE' statements to make sure we set 
    the correct css classes inside of the component(buidling blocks
    of any React app.). */
    const getClassName = () => {

        const baseClasses = 'flex items-center pb-2 px-4 cursor-pointer gap-2.5'

        if (location.pathname === route) {
            return `${baseClasses} fill-[#FFFFFF] text-[#FFFFFF]`
            //returns class names to make text white.
        } else {
            return `${baseClasses} flex items-center fill-[#b3b3b3] text-[#b3b3b3] hover:text-white hover:fill-white`;
            //returns class names to make text grey.
        }
    }; 
    
    return ( 
        <Link
            className={getClassName()}
            to={route}
        >
            {icon} {title}
        </Link>
    );
}

export default SideNavItem;