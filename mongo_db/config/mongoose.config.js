import { connect } from "mongoose";
import dotenv from "dotenv";  //DELETE BEFORE FILE BEFORE UPLOADING TO GIT


dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;


async function dbConnect() {
	
	try {
		await connect(MONGODB_URI, {
			dbName: "Books",
		});
		console.log(
			"***************Pinged your deployment. You successfully connected to Database ***************************"
		);
	} catch (error) {
		console.log("@@@@@@@@@@@@@@@@@@ERROR connect to Database!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		throw error;
	}
};
export default dbConnect;