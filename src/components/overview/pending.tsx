import React from "react";
import Image from "next/image";

const Pending = () => {
    return (
        <div className="flex-grow p-2.5 rounded-[8px] overflow-hidden bg-white shadow-md">
            <p className="text-[16px] font-normal flex items-center gap-3">
                Amount Pending
                <Image width={0} height={0} src="/navbar/help.svg" alt="Help" />
            </p>
            <div className="flex items-center justify-between mt-4 mb-2">
                <p className="text-[32px] font-medium">₹92,312.20</p>
                <p className="flex items-center gap-1 text-[16px] underline font-normal text-[#146EB4]">
                    13 orders
                    <Image width={0} height={0}
                        className="w-[24px] h-[24px]"
                        src="chevron-blue-right.svg"
                        alt="arrow"
                    />
                </p>
            </div>
        </div>
    );
};

export default Pending;
