import React from "react";

interface Props {
    expandSidebar: boolean;
}
const Credits: React.FC<Props> = ({ expandSidebar }) => {
    return (
        <div className="bg-[#353C53] p-[4px] sm:p-[10px] rounded-[4px] flex items-center">
            <div className="p-[6px] rounded-[4px] bg-opacity-10 bg-white">
                <img src="/wallet.svg" alt="wallet" />
            </div>
            <div className={`ml-[20px] ${expandSidebar ? "block" : "hidden"}`}>
                <p className="text-[13px] font-normal opacity-70">
                    Available credits
                </p>
                <p className="text-[16px] font-medium">222.10</p>
            </div>
        </div>
    );
};

export default Credits;
