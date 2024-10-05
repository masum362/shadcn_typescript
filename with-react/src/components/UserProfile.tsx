import { user } from "@/types/types";
import React, { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState<user>({
    id: 1,
    name: "masum ahmed",
    email: "masumahmed@gmail.com",
  });
  return (
    <div>
      <h1>{user.name}</h1>
      <button
        onClick={() =>
          setUser({
            id: 1,
            name: "lotib uddin",
            email: "lotib@gmail.com",
          })
        }
      >
        Change
      </button>
    </div>
  );
};

export default UserProfile;
