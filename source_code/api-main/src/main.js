import "dotenv/config";
import express from "express";
import clientRoutes from "./routes/clientRoute.js";
import sellerRoutes from "./routes/sellerRoute.js";
import productRoutes from "./routes/productRoute.js";
import saleRoutes from "./routes/saleRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", clientRoutes, sellerRoutes, productRoutes, saleRoutes);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
