import React from "react";
import SearchTransaction from "./searchTransaction";
import OrderTable from "./orderTable";

const Orders = () => {
    return (
        <div className="bg-white p-2 my-2 ">
            <div className="flex justify-between items-center">
                <SearchTransaction />
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 font-normal text-[#4D4D4D] text-[15px] border border-[#D9D9D9] px-[12px] py-[6px] rounded-[4px]">
                        Sort <img src="/sort.svg" alt="sort" />
                    </button>
                    <button className="border border-[#D9D9D9] px-[8px] py-[6px] rounded-[4px]">
                        <img src="/download.svg" alt="download" />
                    </button>
                </div>
            </div>
            <OrderTable />
        </div>
    );
};

export default Orders;
