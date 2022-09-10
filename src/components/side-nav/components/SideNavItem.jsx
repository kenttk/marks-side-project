import React from "react";

const SideNavItem = ({ title, icon }) => {
    return (
        <div className="flex items-center fill-white text-white py-2 px-6 cursor-pointer">
            {icon} {title}
        </div>
    );
}

export default SideNavItem;