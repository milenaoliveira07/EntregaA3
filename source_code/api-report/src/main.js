import { sequelize } from "./config/database.js";
import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection made successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((e) => console.error("Error:", e));
