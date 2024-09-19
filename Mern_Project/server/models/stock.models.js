import { model, Schema} from "mongoose";

const StockSchema = new Schema(
	{
		symbol: {
			type: String,
			required: ["Stocks"]
		},

	},
	{ timestamps: true }
);

const Stock = model("Stock", StockSchema); 
export default Stock;
