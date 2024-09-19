import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/patient.routes.js";

const app = express();

//ACCESS THE ENVIROMENT VARIABLES
app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT; //references the .env hidden file

//FUNCTION TO ACCESS REMOTE DB
const patients = "patients"; //UPDATE!!!!!
dbConnect(patients);

app.use("/api/patients", router); //UPDATE!!!!!

app.listen(PORT, () =>
	console.log(
		`*************   Listening on port: ${PORT}    ***********************`
	)
);


