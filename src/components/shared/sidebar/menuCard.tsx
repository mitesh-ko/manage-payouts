"use client";
import React, { useEffect } from "react";

import { usePathname } from "next/navigation";

interface Props {
    title: string;
    svg: string;
}

const MenuCard: React.FC<Props> = ({ svg, title }) => {
    const router = usePathname();

    return (
        <div
            className={`flex rounded-[4px] p-[10px] hover:bg-white hover:bg-opacity-10 bg-opacity-10 cursor-pointer ${
                router.split("/").includes(title.toLocaleLowerCase())
                    ? "bg-white"
                    : ""
            }`}
        >
            <img
                src={svg}
                className="mr-[15px] w-[20px] h-[20px]"
                alt="menu icon"
            />
            <p className="text-[14px] font-medium">{title}</p>
        </div>
    );
};

export default MenuCard;
