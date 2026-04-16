import { model, Schema } from "mongoose";


const MusicSchema = new Schema(
	{
		title: {
			type: String,
			required: [true, "Song title is required!"],
			min: [1, "Song title must be at least 1 character!"],
			max: [40, "Song title must be less than 40 characters!"],
		},

		artist: {
			type: String,
			required: [true, "Artist name is required!"],
			minlength: [1, "Artist name must be at least 1 character!"],
			maxlength: [80, "Artist name must be less than 40 characters long!"],
		},

	},
	{ timestamps: true }
);

const Music = model("Music", MusicSchema);
export default Music;
