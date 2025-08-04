"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Props {
    title: string;
    svg: string;
    expandSidebar: boolean;
}

const MenuCard: React.FC<Props> = ({ svg, title }) => {
    const router = usePathname();

    return (
        <div
            className={`flex items-center rounded-[4px] h-10 px-2.5 hover:border-2 hover:border-white cursor-pointer ${
                router.split("/").includes(title.toLocaleLowerCase())
                    ? "border-2 border-white"
                    : ""
            }`}
        >
            <Image width={0} height={0} src={svg} className=" w-[20px] h-[20px]" alt="menu icon" />
            <p className={`text-[14px] ml-[15px] font-medium text-white`}>{title}</p>
        </div>
    );
};

export default MenuCard;
