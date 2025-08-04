import React from "react";

const Profile = () => {
    return (
        <div className="mb-[24px]">
            <div className="flex items-center">
                <img
                    className="h-[40px] w-[40px] mr-4 rounded-[4px]"
                    src="https://picsum.photos/200"
                    alt="profile pic"
                />
                <div className="flex-1">
                    <p className="font-medium text-[15px]">Nishyan</p>
                    <p className="opacity-70 underline text-[13px]">
                        Visit store
                    </p>
                </div>
                <img
                    className=" rotate-90 w-[24px] h-[24px]"
                    src="chevron-right.svg"
                    alt="arrow"
                />
            </div>
        </div>
    );
};

export default Profile;
