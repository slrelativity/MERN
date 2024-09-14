import { connect } from "mongoose";
import dotenv from "dotenv";  //DELETE BEFORE FILE BEFORE UPLOADING TO GIT


dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;


const dbConnect = async (books)  =>{
	
	try {
		await connect(MONGODB_URI, {
			dbName: books,
		});
		console.log(`***************   Pinged your deployment. You successfully connected to ${books}!  *************************`);
	} catch (error) {
		console.log(`@@@@@@@@@@@@@@@@@@ ERROR connecting to ${books}`, error);
		throw error;
	}
};
export default dbConnect;