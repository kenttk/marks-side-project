import React from "react";
import NavItem from "./components/NavItem";

const SideNav = () => {
    return (
        <nav className="bg-black sidebar-grid">
            <NavItem route="/" text="Home" />
            <NavItem route="/search" text="Search" />
        </nav>
    );
}

export default SideNav;