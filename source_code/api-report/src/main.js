import "dotenv/config";
import express from "express";
import reportRoutes from "./routes/reportRoute.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api", reportRoutes);

app.listen(PORT, () => {
  console.log(`Report API running on port ${PORT}`);
});
