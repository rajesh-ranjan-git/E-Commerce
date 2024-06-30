import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeStore } from "./utils/ThemeController";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeStore);
  const [activeThemeButton, setActiveThemeButton] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    setActiveThemeButton(
      localStorage.getItem("Theme") === "light" ? false : true
    );
  }, []);

  const darkTheme = "navbar bg-base-100 sticky z-10";
  const lightTheme = "navbar bg-gray-300 sticky z-10 text-black";

  return (
    <div className={theme === "light" ? lightTheme : darkTheme}>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          GetKart
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li>
            <Link to="/cart">
              Cart{" "}
              <sup className="text-red-600 text-xl font-bold">
                {cartItems.length}
              </sup>
            </Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/food" className="text-red-600">
              FoodApp
            </Link>
          </li>
          <li>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
                checked={activeThemeButton}
                onClick={(e) => {
                  setTheme(theme === "light" ? "dark" : "light");
                  localStorage.setItem(
                    "Theme",
                    theme === "light" ? "dark" : "light"
                  );
                  setActiveThemeButton(
                    theme === "light"
                      ? (e.target.checked = true)
                      : (e.target.checked = false)
                  );
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
