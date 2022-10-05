import React from "react";

import { useUser } from "@/lib/hooks/use-user";

import SignOut from "./SignOut";

const UserInfoCard = () => {
  const user = useUser();
  return (
    <div className="flex h-56 w-full flex-col justify-center gap-3 px-2 text-left lg:absolute lg:right-10 lg:h-44 lg:w-72 lg:gap-5 lg:px-6 lg:pb-0 lg:pt-0 2xl:right-72">
      <h4>User</h4>
      <div className="flex items-center gap-3">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gray-800 uppercase text-white">
          <h2>{user && user.email && user.email[0]}</h2>
        </div>
        <p className="font-medium">{user && user.email}</p>
      </div>
      <SignOut />
    </div>
  );
};

export default UserInfoCard;
