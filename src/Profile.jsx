import React, { useContext } from "react";
import { ThemeStore } from "./utils/ThemeController";
import ProfilePic from "./assets/profile_pic.png";

const Profile = () => {
  const { theme } = useContext(ThemeStore);

  const darkTheme = "bg-base-200 w-screen h-[91vh]";
  const lightTheme = "bg-white w-screen h-[91vh] text-black";

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className="pt-8">
        <div className="card lg:card-side bg-base-100 shadow-xl w-3/4 mx-auto">
          <figure>
            <img src={ProfilePic} alt="Profile Picture" className="h-[85vh]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[5rem]">Rajesh Ranjan</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
