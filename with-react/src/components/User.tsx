import { UserInfo } from "@/types";
import React from "react";

type userInfoProps = {
  userInfo: UserInfo;
};

const User:React.FC<userInfoProps> = ({userInfo}) => {
  return <div>
    <h1>{userInfo.id}</h1>
    <h1>{userInfo.name}</h1>
    <h1>{userInfo.email}</h1>
  </div>;
};

export default User;
