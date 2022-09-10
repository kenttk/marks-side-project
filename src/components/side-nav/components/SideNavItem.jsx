import React from "react";

const SideNavItem = ({ title, icon }) => {
    return ( 
        <div className="flex items-center fill-white text-white pb-2 px-4 cursor-pointer gap-2.5">
            {icon} {title}
        </div>
    );
}

export default SideNavItem;