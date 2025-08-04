import React from "react";
import Payout from "./payout";
import Pending from "./pending";
import Processed from "./processed";
import Orders from "../orders";

const Overview = () => {
    return (
        <div className="p-3 sm:p-7">
            <div className="flex items-center justify-between">
                <p className="text-[#1A181E] font-medium text-[20px]">
                    Overview
                </p>
                <button className="flex gap-2 items-center justify-between rounded-[4px] border-[#D9D9D9] border px-3 py-2 text-[16px] text-[#4D4D4D] font-normal">
                    This Month
                    <img
                        className="h-[16px] w-[16px]"
                        src="/arrow.svg"
                        alt="arrow"
                    />
                </button>
            </div>

            <div className="flex gap-10 my-10 items-start flex-wrap">
                <Payout />
                <Pending />
                <Processed />
            </div>

            <div>
                <p className="text-[#1A181E] font-medium text-[20px] my-4">
                    Transactions | This Month
                </p>
                <div className="flex items-center gap-4 mt-8">
                    <button className="rounded-[40px] text-[#808080] text-[14px] bg-[#E6E6E6] px-5 py-1">
                        Payouts (22)
                    </button>
                    <button className="rounded-[40px] text-white text-[14px] bg-[#146EB4] px-5 py-1">
                        Refunds (6)
                    </button>
                </div>
            </div>
            <Orders />
        </div>
    );
};

export default Overview;
