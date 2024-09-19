import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect(stocks) {//UPDATE!!
	try {
		await connect(MONGODB_URI, { dbName: stocks });
		console.log("***************Pinged your deployment. You successfully connected to Database ***************************"
		);
	} catch (error) {console.log("@@@@@@@@@@@@@@ERROR connecting to Database!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		throw error;
	}
}
export default dbConnect;