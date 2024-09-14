import { model, Schema } from "mongoose";


const StoreSchema = new Schema(
	{
		name: {
			//validation
			type: String,
			required: [true, "Store name is required."], 
			minlength: [3, "Store name must be at least 3 characters long."], 
			maxlength: [255, "Store name must be less than 255 characters long."], 
		},

        
		storeNumber: {
			type: Number,
			required: [true, "Store Number is required."],
			min: [0, "Store Number must be a number greater than 0."],
		},

		isOpen: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
);


const Store = model("Store", StoreSchema);
export default Store;
