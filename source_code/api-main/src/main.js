import express from "express";
import "dotenv/config";
import clientRoutes from "./routes/clientRoute.js";
import sellerRoutes from "./routes/sellerRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", clientRoutes);
app.use("/api", sellerRoutes);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
