import React from "react";

const SearchTransaction = () => {
    return (
        <div className="flex px-[14px] py-[8px] rounded-[6px] border border-[#D9D9D9]">
            <img src="/navbar/search.svg" />
            <input
                className="outline-none bg-transparent text-[#808080] text-[14px] font-normal ml-[10px]"
                type="text"
                placeholder="Order ID or transaction ID"
            />
        </div>
    );
};

export default SearchTransaction;
