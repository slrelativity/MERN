// 1. import all dependencies
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./configs/mongoose.config.js";
import router from "./routes/product.routes.js";
const app = express();

// 2. configurations
app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT; // process.env refers to the .env file

dbConnect();

// 3. Routes & Logic
app.use("/api/products", router);

// 4. Listen to the port
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
