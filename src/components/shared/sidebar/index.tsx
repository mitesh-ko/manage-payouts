"use client";
import React, { useState } from "react";
import Profile from "./profile";
import SideMenu from "./sidemenu";
import Credits from "./credits";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

const Sidebar = () => {
    const [expandSidebar, setExpandSidebar] = useState<boolean>(false);
    const toggleExpandSidebar = () => {
        setExpandSidebar(!expandSidebar);
    };
    return (
        <motion.div
            initial={{
                width: expandSidebar ? "250px" : isMobile ? "56px" : "80px",
            }}
            animate={{
                width: expandSidebar ? "250px" : isMobile ? "56px" : "80px",
            }}
            transition={{
                ease: "easeIn",
                duration: 0,
            }}
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
        </motion.div>
    );
};

export default Sidebar;
