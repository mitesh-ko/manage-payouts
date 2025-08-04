import React from "react";

const Credits = () => {
    return (
        <div className="bg-[#353C53] p-[10px] rounded-[4px] flex items-center">
            <div className="p-[6px] rounded-[4px] bg-opacity-10 bg-white">
                <img src="/wallet.svg" />
            </div>
            <div className="ml-[20px]">
                <p className="text-[13px] font-normal opacity-70">Available credits</p>
                <p className="text-[16px] font-medium">222.10</p>
            </div>
        </div>
    );
};

export default Credits;
