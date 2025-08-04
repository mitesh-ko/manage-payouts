import React, { useEffect } from "react";
import sidemenu from "@/data/sidemenu.json";
import MenuCard from "./menuCard";

interface menu {
    id: number;
    title: string;
    svg: string;
}

interface Props {
    expandSidebar: boolean;
}

const SideMenu: React.FC<Props> = ({ expandSidebar }) => {
    return (
        <div className="flex-1 overflow-y-auto">
            {sidemenu.map((each: menu) => {
                return (
                    <MenuCard
                        key={each.id}
                        svg={each.svg}
                        title={each.title}
                        expandSidebar={expandSidebar}
                    />
                );
            })}
        </div>
    );
};

export default SideMenu;
