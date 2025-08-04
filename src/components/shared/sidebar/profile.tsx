import React from "react";
import { motion } from "framer-motion";

interface Props {
    toggleExpandSidebar: () => void;
    expandSidebar: boolean;
}

const Profile: React.FC<Props> = ({ toggleExpandSidebar, expandSidebar }) => {
    return (
        <div className="mb-[24px] relative h-[94px] ">
            <div>
                <motion.img
                    initial={{
                        rotate: expandSidebar ? 180 : 0,
                    }}
                    animate={{
                        rotate: expandSidebar ? 180 : 0,
                    }}
                    onClick={() => toggleExpandSidebar()}
                    className="ml-1 w-[28px] h-[28px] p-1 cursor-pointer bg-sidebar rounded-full  border border-white"
                    src="chevron-right.svg"
                    alt="arrow"
                />
            </div>
            <div className={`flex items-center mt-6 h-[42px] `}>
                <img
                    className={`h-[40px] w-[40px] mr-4 rounded-[4px] `}
                    src="https://picsum.photos/200"
                    alt="profile pic"
                />
                <motion.div
                    initial={{
                        opacity: expandSidebar ? 1 : 0,
                    }}
                    animate={{
                        opacity: expandSidebar ? 1 : 0,
                    }}
                    className={`flex-1`}
                >
                    <p className="font-medium text-[15px]">Nishyan</p>
                    <p className="opacity-70 underline text-[13px] whitespace-nowrap">
                        Visit store
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Profile;
