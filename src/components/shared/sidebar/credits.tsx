import React from "react";
import { motion, AnimatePresence } from "framer-motion";
interface Props {
    expandSidebar: boolean;
}
const Credits: React.FC<Props> = ({ expandSidebar }) => {
    return (
        <motion.div
            layout
            className="bg-[#353C53] p-[10px] rounded-[4px] flex items-center"
        >
            <motion.img
                layout="position"
                initial={{
                    width: expandSidebar ? "24px" : "20px",
                    height: expandSidebar ? "24px" : "20px",
                }}
                animate={{
                    width: expandSidebar ? "24px" : "20px",
                    height: expandSidebar ? "24px" : "20px",
                }}
                className=" rounded-[4px] bg-opacity-10 bg-white"
                src="/wallet.svg"
                alt="wallet"
            />
            <AnimatePresence>
                {expandSidebar && (
                    <motion.div
                        className={`ml-[16px]`}
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                    >
                        <p className="text-[13px] font-normal opacity-70 whitespace-nowrap">
                            Available credits
                        </p>
                        <p className="text-[16px] font-medium">222.10</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Credits;
