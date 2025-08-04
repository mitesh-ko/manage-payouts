import React from "react";
import Profile from "./profile";
import SideMenu from "./sidemenu";
import Credits from "./credits";

const Sidebar = () => {
    return (
        <div className="h-screen w-[250px] bg-sidebar  flex-col p-5 text-primary hidden sm:flex">
            <Profile />
            <SideMenu />
            <Credits />
        </div>
    );
};

export default Sidebar;
