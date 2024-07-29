import React, { useContext, useRef } from "react";
import { ThemeStore } from "./utils/ThemeController";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ProfilePic from "./assets/profile_pic.png";
import { usersAPI } from "./Constants";

const Profile = () => {
  const { theme } = useContext(ThemeStore);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const numberRef = useRef("");
  const { userName, email, phoneNumber } = user;

  const darkTheme = "bg-base-200 w-screen h-[91vh]";
  const lightTheme = "bg-white w-screen h-[91vh] text-black";

  const handleUpdate = async () => {
    const phoneNumber = numberRef.current.value;
    numberRef.current.value = "";

    const response = await axios.patch(
      `${usersAPI}/updateUser`,
      { phoneNumber },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );

    if (response.data.result === true) {
      dispatch(updateUser(response.data.data));
    }
  };

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className="pt-8">
        <div className="card lg:card-side shadow-xl w-3/4 mx-auto">
          <figure>
            <img src={ProfilePic} alt="Profile Picture" className="h-[85vh]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[3rem]">Your Profile</h2>
            <h2 className="card-title mt-20">
              <b>Username :</b> {userName}
            </h2>
            <h2 className="card-title mt-4">
              <b>Email :</b> {email}
            </h2>
            {phoneNumber ? (
              <h2 className="card-title mt-4">
                <b>Phone Number :</b>
                {phoneNumber}
              </h2>
            ) : (
              ""
            )}
            <p></p>
            <div className="card-actions justify-end">
              {phoneNumber ? (
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Update Phone Number
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Add Phone Number
                </button>
              )}
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-w-[40%]">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <label className="w-full">
                      <div className="label">
                        <span className="label-text">New Phone Number</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter new Phone Number..."
                        ref={numberRef}
                        className="input input-bordered input-primary w-full max-w-[70%] mr-2"
                      />
                      <button
                        className="btn btn-outline btn-info w-full max-w-[27%]"
                        onClick={handleUpdate}
                      >
                        Update
                      </button>
                    </label>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
