import { model, Schema } from "mongoose";


const PatientSchema = new Schema( 
	{
		age: {
			type: Number, 
			required: [true, "Patient age is required!"], 
			min: [1, "Patient must be at least 1!"], 
			max: [140, "Patient  can not be older than 140!"], 
		},

		name: {
			type: String, 
			required: [true, "Patient name is required!"], 
			minlength: [1, "Patient name must be at least 1 character long!"], 
			maxlength: [40, "Patient  name must be less than 40 characters long!"], 
		},

		symptoms: {
			type: [String], 
			required: [true, "Patient sypmtoms are required!"], 
		},

	},
	{ timestamps: true }
);

const Patient = model("Patient", PatientSchema);
export default Patient;
