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
                <div>
                    <p className="font-medium text-[15px]">Nishyan</p>
                    <p className="opacity-70 underline text-[13px]">Visit store</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
