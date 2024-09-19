import { model, Schema } from "mongoose";


const PatientSchema = new Schema( //UPDATE!!
	{
		age: {
			//validation
			type: Number, //UPDATE!!
			required: [true, "Patient age is required!"], //UPDATE!!
			min: [1, "Patient must be at least 1!"], //UPDATE!!
			max: [140, "Patient  can not be older than 140!"], //UPDATE!!
		},

		name: {
			//UPDATE!!
			//validation
			type: String, //UPDATE!!
			required: [true, "Patient name is required!"], //UPDATE!!
			minlength: [1, "Patient name must be at least 1 character long!"], //UPDATE!!
			maxlength: [40, "Patient name must be less than 40 characters long!"], //UPDATE!!
		},

		symptoms: {
			//UPDATE!!
			//validation
			type: [String], //UPDATE!!
			required: [true, "Patient sypmtoms are required!"], //UPDATE!!
		},


	},
	{ timestamps: true }
);

const Patient = model("Patient", PatientSchema);//UPDATE!!
export default Patient;
