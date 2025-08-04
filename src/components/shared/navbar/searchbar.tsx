import React from "react";
import Image from "next/image";

const Searchbar = () => {
    return (
        <div className="flex bg-[#F2F2F2] px-[16px] py-[9px] rounded-[6px] col-span-2 md:col-span-1">
            <Image width={15} height={15} src="/navbar/search.svg" alt="search" />
            <input
                className="w-full outline-none bg-transparent text-[#808080] text-[15px] font-normal ml-[10px]"
                type="text"
                placeholder="Search features, tutorials, etc."
            />
        </div>
    );
};

export default Searchbar;
