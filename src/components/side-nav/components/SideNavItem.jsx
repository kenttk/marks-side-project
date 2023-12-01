import React from "react";
import { Link } from "react-router-dom";
/* is an element that lets the user navigate to another page by clicking or tapping on it.
In react-router-dom, a <Link> renders an accessible <a> element with a real href that points 
to the resource it's linking to. */

/* This hook returns the current 'location' object. This can be useful if
you'd like to perform some side effect whenver the current location changes. */
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SideNavItem = ({ title, icon, iconActive, route }) => {
  let location = useLocation();

  /* Adding logic 'IF' and 'ELSE' statements to make sure we set 
    the correct css classes inside of the component(buidling blocks
    of any React app.). */
  const getClassName = () => {
    const baseClasses =
      "flex items-center h-10 cursor-pointer gap-x-4 text-sm ";

    if (location.pathname === route) {
      return `${baseClasses} fill-[#FFFFFF] text-[#FFFFFF]`;
      //returns class names to make text white.
    } else {
      return `${baseClasses} flex items-center fill-[#b3b3b3] text-[#b3b3b3] hover:text-white hover:fill-white`;
      //returns class names to make text grey.
    }
  };

  const getIcon = () => {
    if (location.pathname === route) {
      return iconActive;
      //return the active icon.
    } else {
      return icon;
      //return to normal icon.
    }
  };

  return (
    <Link className={getClassName()} to={route}>
      {getIcon()} {title}
    </Link>
  );
};

SideNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  iconActive: PropTypes.any.isRequired,
  route: PropTypes.any.isRequired,
};

export default SideNavItem;
