"use client";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import OrderCard from "./orderCard";
import Loader from "../shared/loader";

interface Order {
    id: string;
    status: number;
    transactionID: string;
    refundDate: Date;
    amount: string;
    unit: string;
}

const OrderTable = () => {
    useEffect(() => {
        const orders = Array.from({ length: 20 }, createUser);
        setOrders(orders);
        setIsLoading(false);
    }, []);

    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const createUser = () => {
        return {
            id: faker.string.numeric(6),
            status: faker.number.int({ min: 0, max: 3 }),
            transactionID: faker.string.numeric(12),
            refundDate: faker.date.anytime(),
            amount: faker.finance.amount(),
            unit: "₹",
        };
    };

    return (
        <div className="my-4">
            <div className="grid grid-cols-5 bg-[#F2F2F2] px-[12px] py-[10px] rounded-[4px]">
                <p className="font-medium text-[14px] text-[#4D4D4D]">
                    Order ID
                </p>
                <p className="font-medium text-[14px] text-[#4D4D4D]">Status</p>
                <p className="font-medium text-[14px] text-[#4D4D4D]">
                    Transaction ID
                </p>
                <p className="font-medium text-[14px] text-[#4D4D4D]">
                    Refund date
                </p>
                <p className="font-medium text-[14px] text-[#4D4D4D] text-right">
                    Order amount
                </p>
            </div>
            {isLoading ? (
                <div className="flex justify-center py-4">
                    <Loader />
                </div>
            ) : (
                orders.map((eachOrder: Order) => {
                    return <OrderCard key={eachOrder.id} order={eachOrder} />;
                })
            )}
        </div>
    );
};

export default OrderTable;
