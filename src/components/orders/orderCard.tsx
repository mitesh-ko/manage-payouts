import React from "react";
import { format } from "date-fns";

interface Props {
    id: string;
    status: number;
    transactionID: string;
    refundDate: Date;
    amount: string;
    unit: string;
}

const OrderCard: React.FC<{ order: Props }> = ({ order }) => {
    const status = ["Processing", "Successful", "Successful", "Pending"];
    const statusColor = [
        "bg-[#999999]",
        "bg-[#17B31B]",
        "bg-[#17B31B]",
        "bg-[#FAB73B]",
    ];
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-[14px] py-[14px] rounded-[4px] border-b border-[#F2F2F2]">
            <p className="font-medium text-[14px]  text-[#146EB4] cursor-pointer hover:underline">
                #{order.id}
            </p>
            <p className="font-normal text-[14px] text-[#4D4D4D] flex items-center gap-2">
                <div
                    className={` ${
                        statusColor[order.status]
                    } rounded-full h-2.5 w-2.5`}
                ></div>
                {status[order.status]}
            </p>
            <p className="font-normal text-[14px] text-[#4D4D4D] hidden md:block">
                {order.transactionID}
            </p>
            <p className="font-normal text-[14px] text-[#4D4D4D] hidden lg:block">
                {format(order.refundDate, "d MMMM uuuu, h:mm a")}
            </p>
            <p className="font-medium text-[14px] text-[#4D4D4D]  text-right">
                {order.unit}
                {order.amount}
            </p>
        </div>
    );
};

export default OrderCard;
