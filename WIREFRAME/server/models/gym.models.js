import { model, Schema } from "mongoose";

const GymSchema = new Schema( //UPDATE!!
	{
		name: {
			//UPDATE!!
			//validation
			type: String, //UPDATE!!
			required: [true, "Gym name is required!"], //UPDATE!!
			minlength: [2, "Gym's name must be at least 2 characters long!"], //UPDATE!!
			maxlength: [255, "Gym's name must be less than 255 characters long!"], //UPDATE!!
		},

		owner: {
			//UPDATE!!
			//validation
			type: String, //UPDATE!!
			required: [true, "Gym owner is required!"], //UPDATE!!
			minlength: [5, "Gym owners name must be at least 5 characters long!"], //UPDATE!!
			maxlength: [255, "Gym ownermust be less than 255 characters long!"], //UPDATE!!
		},

		managers: {
			//validation
			type: Number, //UPDATE!!
			required: [true, "The number of managers working at this gym are required!"], //UPDATE!!
			min: [1, "Gym must have at least 1 manager!"], //UPDATE!!
		},

		isOpen: {
			//UPDATE!!
			//validation
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Gym = model("Gym", GymSchema);//UPDATE!!
export default Gym;//UPDATE!!
