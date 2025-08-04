'use client';

import React, { useEffect } from "react";
import sidemenu from "@/data/sidemenu.json";
import MenuCard from "./menuCard";

interface menu {
    id: number;
    title: string;
    svg: string;
}

const SideMenu = () => {
    return (
        <div className="flex-1 overflow-y-auto">
            {sidemenu.map((each: menu) => {
                return (
                    <MenuCard key={each.id} svg={each.svg} title={each.title} />
                );
            })}
        </div>
    );
};

export default SideMenu;
