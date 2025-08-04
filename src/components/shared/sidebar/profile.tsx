import React from "react";

interface Props {
    toggleExpandSidebar: () => void;
    expandSidebar: boolean;
}

const Profile: React.FC<Props> = ({ toggleExpandSidebar, expandSidebar }) => {
    return (
        <div className="mb-[24px]">
            <div
                className={`flex items-center ${
                    !expandSidebar ? "justify-center" : ""
                }`}
            >
                <img
                    className={`h-[40px] w-[40px] mr-4 rounded-[4px] ${
                        expandSidebar ? "block" : "hidden"
                    }`}
                    src="https://picsum.photos/200"
                    alt="profile pic"
                />
                <div className={`flex-1 ${expandSidebar ? "block" : "hidden"}`}>
                    <p className="font-medium text-[15px]">Nishyan</p>
                    <p className="opacity-70 underline text-[13px]">
                        Visit store
                    </p>
                </div>
                <img
                    onClick={() => toggleExpandSidebar()}
                    className=" w-[28px] h-[20px] cursor-pointer"
                    src="bars-solid.svg"
                    alt="arrow"
                />
            </div>
        </div>
    );
};

export default Profile;
