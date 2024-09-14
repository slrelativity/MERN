import { model, Schema } from "mongoose";

const BookSchema = new Schema( //UPDATE!!
	{
		title: {
			//UPDATE!!
			//validation
			type: String, //UPDATE!!
			required: [true, "Book title is required."], //UPDATE!!
			minlength: [2, "Title must be at least 2 characters long."], //UPDATE!!
			maxlength: [255, "Title must be less than 255 characters long."], //UPDATE!!
		},

		author: {
			//UPDATE!!
			//validation
			type: String, //UPDATE!!
			required: [true, "Book author is required."], //UPDATE!!
			minlength: [5, "Authors name must be at least 5 characters long."], //UPDATE!!
			maxlength: [255, "Authors name must be less than 255 characters long"], //UPDATE!!
		},

		pages: {
			//validation
			type: Number, //UPDATE!!
			required: [true, "Number of pages in the book is required."], //UPDATE!!
			min: [1, "Book must have at least 1 page."], //UPDATE!!
		},

		isAvailable: {
			//UPDATE!!
			//validation
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Book = model("Book", BookSchema);//UPDATE!!
export default Book;//UPDATE!!
