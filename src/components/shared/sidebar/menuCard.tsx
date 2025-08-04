"use client";
import React, { useEffect } from "react";

import { usePathname } from "next/navigation";

interface Props {
    title: string;
    svg: string;
    expandSidebar: boolean;
}

const MenuCard: React.FC<Props> = ({ svg, title, expandSidebar }) => {
    const router = usePathname();

    return (
        <div
            className={`flex items-center rounded-[4px] h-10 px-2.5 hover:bg-white hover:bg-opacity-10 bg-opacity-10 cursor-pointer ${
                router.split("/").includes(title.toLocaleLowerCase())
                    ? "bg-white"
                    : ""
            }`}
        >
            <img src={svg} className=" w-[20px] h-[20px]" alt="menu icon" />
            <p className={`text-[14px] ml-[15px] font-medium`}>{title}</p>
        </div>
    );
};

export default MenuCard;
