import express from "express";
import cors from "cors";
import dotenv from "dotenv"; //DELETE BEFORE FILE BEFORE UPLOADING TO GIT
import dbConnect from "./config/mongoose.config.js";
// import { model, Schema } from "mongoose";

const app = express();



//MIDDLEWARE
app.use(express.json(), cors());


//ACCESS THE ENVIROMENT VARIABLES
dotenv.config();
const PORT = process.env.PORT;




//FUNCTION TO ACCESS REMOTE DB

dbConnect();





app.listen(PORT, () => console.log(`*************Listening on port: ${PORT}`));
