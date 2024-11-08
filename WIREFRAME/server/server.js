import express from "express";
import cors from "cors";
import dotenv from "dotenv"; //DELETE BEFORE FILE BEFORE UPLOADING TO GIT
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/gym.routes.js"; //UPDATE!!!!!

const app = express();

//ACCESS THE ENVIROMENT VARIABLES
app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT; //references the .env hidden file

//FUNCTION TO ACCESS REMOTE DB
const gyms = "gyms"; //UPDATE!!!!!
dbConnect(gyms);

app.use("/api/gyms", router); //UPDATE!!!!!

app.listen(PORT, () =>
	console.log(`*************   Listening on port: ${PORT}    ***********************`	));
