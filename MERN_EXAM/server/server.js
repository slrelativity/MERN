import express from "express";
import cors from "cors";
import dotenv from "dotenv"; //DELETE BEFORE FILE BEFORE UPLOADING TO GIT
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/store.routes.js";


const app = express();

app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT;

const stores = "stores";
dbConnect(stores);

app.use("/api/stores", router);


app.listen(PORT, () =>	console.log( `*************   Listening on port: ${PORT}    ***********************`	));