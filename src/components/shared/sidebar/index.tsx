"use client";
import React, { useState } from "react";
import Profile from "./profile";
import SideMenu from "./sidemenu";
import Credits from "./credits";

const Sidebar = () => {
    const [expandSidebar, setExpandSidebar] = useState<boolean>(false);
    const toggleExpandSidebar = () => {
        setExpandSidebar(!expandSidebar);
    };
    return (
        <div
            className={`h-screen ${
                expandSidebar ? "w-[200px] sm:w-[250px]" : "w-auto"
            }  bg-sidebar  flex-col py-4 p-2 sm:p-5 text-primary flex transition-all duration-300 ease-in absolute sm:relative`}
        >
            <Profile
                expandSidebar={expandSidebar}
                toggleExpandSidebar={toggleExpandSidebar}
            />
            <SideMenu expandSidebar={expandSidebar} />
            <Credits expandSidebar={expandSidebar} />
        </div>
    );
};

export default Sidebar;
