import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use("/api");

app.listen(PORT, console.log(`Server running on port ${PORT}`));
