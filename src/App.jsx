import Navbar from "./Navbar";
import { Outlet } from "react-router";
import ThemeController from "./utils/ThemeController";

const App = () => {
  return (
    <ThemeController>
      <Navbar />
      <Outlet />
    </ThemeController>
  );
};

export default App;
