import { connect } from "mongoose";
import dotenv from "dotenv";  //DELETE BEFORE FILE BEFORE UPLOADING TO GIT


dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;


const dbConnect = async (DB_NAME)  =>{
	
	try {
		await connect(MONGODB_URI, {
			dbName: DB_NAME,
		});
		console.log(
			`***************   Pinged your deployment. You successfully connected to ${DB_NAME}!  *************************`
		);
	} catch (error) {
		console.log(
			`@@@@@@@@@@@@@@@@@@ ERROR connecting to ${DB_NAME}`, error);
		throw error;
	}
};
export default dbConnect;