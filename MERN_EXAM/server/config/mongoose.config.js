import { connect } from "mongoose";
import dotenv from "dotenv";  //DELETE BEFORE FILE BEFORE UPLOADING TO GIT


dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;


const dbConnect = async (stores)  =>{
	
	try {
		await connect(MONGODB_URI, {
			dbName: stores,
		});
		console.log(`***************   Pinged your deployment. You successfully connected to ${stores}!  *************************`);
	} catch (error) {
		console.log(`@@@@@@@@@@@@@@@@@@ ERROR connecting to ${stores}`, error);
		throw error;
	}
};
export default dbConnect;