import React from "react";
import Image from "next/image";

const Processed = () => {
    return (
        <div className="flex-grow p-2.5 rounded-[8px] overflow-hidden bg-white shadow-md">
            <p className="text-[16px] font-normal flex items-center gap-3">
                Amount Processed
                <Image width={0} height={0} src="/navbar/help.svg" alt="help" />
            </p>
            <div className="flex items-center justify-between mt-4 mb-2">
                <p className="text-[32px] font-medium">₹23,92,312.19</p>
            </div>
        </div>
    );
};

export default Processed;
