import express from "express";
import "dotenv/config";
import clientRoutes from "./routes/clientRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", clientRoutes);


app.listen(PORT, console.log(`Server running on port ${PORT}`));
