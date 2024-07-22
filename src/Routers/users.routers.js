import express from "express";
import {
  Signup,
  Login,
  updateUser,
  getUser,
  Logout,
} from "../Controllers/users.controllers.js";

let Router = express.Router();

Router.post("/signup", Signup)
  .post("/login", Login)
  .patch("/updateUser", updateUser)
  .get("/getUser", getUser)
  .post("/logout", Logout);

export default Router;
