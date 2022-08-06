import React from "react";
import NavItem from "./components/NavItem";

import HomeIcon from '../../icons/Home';
import SearchIcon from '../../icons/Search';
import CollectionIcon from '../../icons/Collection';

import './side-nav.css';

const SideNav = () => {
    return (
        <nav className="bg-black sidebar-grid">
            <NavItem route="/" text="Home" icon={<HomeIcon className="side-nav-icon" />} />
            <NavItem route="/search" text="Search" icon={<SearchIcon className="side-nav-icon" />} />
            <NavItem route="/library" text="Your library" icon={<CollectionIcon className="side-nav-icon" />} />
        </nav>
    );
}

export default SideNav;