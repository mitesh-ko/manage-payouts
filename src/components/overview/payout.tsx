import React from "react";
import Image from "next/image";

const Payout = () => {
    return (
        <div className="flex-grow p-2.5 rounded-[8px] text-white overflow-hidden shadow-md bg-[#146EB4]">
            <p className="text-[16px] font-normal flex items-center gap-3">
                Next Payout <Image width={0} height={0} src="/help-white.svg" alt="help" />
            </p>
            <div className="flex items-center justify-between my-4">
                <p className="text-[32px] font-medium">₹2,312.23</p>
                <p className="flex items-center gap-1 text-[16px] underline font-normal">
                    23 orders{" "}
                    <Image width={0} height={0}
                        className="w-[24px] h-[24px]"
                        src="chevron-right.svg"
                        alt="arrow"
                    />
                </p>
            </div>
            <div className="flex items-center justify-between bg-[#0E4F82] m-[-10px] px-3 py-1.5">
                <p className="text-[13px] text-[#F2F2F2] font-light">
                    Next payout date:
                </p>
                <p className="text-[13px] text-[#F2F2F2] font-normal">
                    Today, 04:00PM
                </p>
            </div>
        </div>
    );
};

export default Payout;
