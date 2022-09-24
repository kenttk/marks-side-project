import React from "react";

const SideNavItem = ({ title, icon }) => {
    return ( 
        <div className="flex items-center fill-[#b3b3b3] text-[#b3b3b3] pb-2 px-4 cursor-pointer gap-2.5 hover:text-white hover:fill-white">
            {icon} {title}
        </div>
    );
}

export default SideNavItem;