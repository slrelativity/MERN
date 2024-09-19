import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/stock.routes.js";

const app = express();


app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT; 


const stocks = "stocks";
dbConnect(stocks);

app.use("/api/stocks", router); 

app.listen(PORT, () =>
	console.log(
		`*************   Listening on port: ${PORT}    ***********************`
	)
);