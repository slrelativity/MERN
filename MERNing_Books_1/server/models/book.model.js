import { model, Schema } from "mongoose";

const BookSchema = new Schema(
	{
		title: {
			//title validation
			type: String,
			required: [true, "Book title is required."], //Book title is required
			minlength: [2, "Title must be at least 2 characters long."], //Min length of the title requirement
			maxlength: [255, "Title must be less than 255 characters long."], //Max length of the title requirement
		},

		author: {
			//author validation
			type: String,
			required: [true, "Book author is required."], //Book author is required
			minlength: [5, "Authors name must be at least 5 characters long."], //Min length of the authors name requirement
			maxlength: [255, "Authors name must be less than 255 characters long"], //Max length of the authors name requirement
		},

		pages: {
			//# of pages validation
			type: Number,
			required: [true, "Number of pages in the book is required."],
			min: [1, "Book must have at least 1 page."],
		},

		isAvailable: {
			//if book is available validation
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
);


const Book = model("Book", BookSchema);
export default Book;