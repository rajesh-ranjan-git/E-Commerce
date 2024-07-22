import express, { urlencoded } from "express";
import dbConnect from "./dbConnect.js";
import "dotenv/config";

const server = express();

let PORT = process.env.PORT || 3000;

server.use(express.json());
server.use(urlencoded({ extended: true }));

dbConnect()
  .then(() => {
    console.log("DB connected...");
    try {
      server.listen(PORT, () => {
        console.log(`Server is running on https://localhost:${PORT}...`);
      });
    } catch (err) {
      console.log("Server Error : ", err);
    }
  })
  .catch((err) => {
    console.log("Database Error : ", err);
  });
