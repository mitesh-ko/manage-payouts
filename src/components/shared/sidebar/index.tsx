"use client";
import React, { useState } from "react";
import Profile from "./profile";
import SideMenu from "./sidemenu";
import Credits from "./credits";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
    const [expandSidebar, setExpandSidebar] = useState<boolean>(false);
    const isDesktop = useMediaQuery({
        query: "(min-width: 640px)",
    });
    const toggleExpandSidebar = () => {
        setExpandSidebar(!expandSidebar);
    };
    return (
        <motion.div
            initial={{
                width: expandSidebar
                    ? isDesktop
                        ? "250px"
                        : "200px"
                    : isDesktop
                    ? "80px"
                    : "56px",
            }}
            animate={{
                width: expandSidebar
                    ? isDesktop
                        ? "250px"
                        : "200px"
                    : isDesktop
                    ? "80px"
                    : "56px",
            }}
            transition={{
                ease: "easeIn",
                duration: 0,
            }}
            onHoverStart={() => setExpandSidebar(true)}
            onHoverEnd={() => setExpandSidebar(false)}
            className={`h-[100svh] ${
                expandSidebar ? "w-[200px] sm:w-[250px]" : "w-auto"
            }  bg-[#1E2640]  flex-col py-4 p-2 sm:p-5 text-primary flex transition-all duration-300 ease-in absolute sm:relative`}
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
