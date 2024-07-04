import React, { useContext } from "react";
import { ThemeStore } from "./utils/ThemeController";

const Profile = () => {
  const { theme } = useContext(ThemeStore);

  const darkTheme = "bg-base-200 w-screen h-[92vh]";
  const lightTheme = "bg-white w-screen h-[92vh] text-black";

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className="text-[5rem] text-center h-[91vh] w-screen flex items-center justify-center">
        <div>This is Profile component.</div>
      </div>
    </div>
  );
};

export default Profile;
