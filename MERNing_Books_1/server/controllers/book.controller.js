import Book from "../models/book.model.js";

const BookController = {
	// get all books
	getAll: async (req, res) => {
		console.log("Reached controller getAll");
		try {
			const getAllBooks = await Book.find(); //function with empty () gets all
			console.log(
				"Successfully got all books **********************",
				getAllBooks
			);
			res.json(getAllBooks);
		} catch (errors) {
			console.log("@@@@@@@@ errors CREATING BOOK @@@@@@@");
			res.status(400).json(errors); //Client...frontend will be able to see message
		}
	},

	// get one book
	getOne: async (req, res) => {
		try {
			// const oneBook = await Book.findOne({"_id": req.params.id}); search by key value pair
			const oneBook = await Book.findById(req.params.id); //function with empty () gets all
			console.log("Successfully got a new book **********************",	oneBook	);
			res.json(oneBook);
		} catch (errors) {
			console.log("@@@@@@@ errors GETTING ONE BOOK @@@@@@@");
			res.status(400).json(errors); //Client...frontend will be able to see message
		}
	},

	// create one new book
	createOne: async (req, res) => {
		console.log("Hello **********************", req.body);
		
		try {
			const newBook = await Book.create(req.body); //function is async
			console.log("Successfully created a new book **********************",newBook);
			res.json(newBook);
		} catch (errors) {
			console.log("@@@@@@@@ errors CREATING A BOOK @@@@@@@");
			res.status(400).json(errors); //Client...frontend will be able to see message
		}
	},

	//update one book
	updateOne: async (req, res) => {
		const options = {
			new: true, //returns result is the updated object
			runValidators: true,
		};
		try { //This takes three arguments...see below
			const updateBook = await Book.findByIdAndUpdate(
				req.params.id,
				req.body,
				options
			); //function is async removed
			console.log(
				"Successfully updated a book **********************",
				updateBook
			);
			res.json(updateBook);
		} catch (errors) {
			console.log("@@@@@@@@ errors UPDATING A BOOK @@@@@@@");
			res.status(400).json(errors); //Client...frontend will be able to see message
		}
	},

	//delete one book
	deleteOne: async (req, res) => {
		try {
			// const deleteBook = await Book.findOneAndDelete({" _id": req.params.id }); //function is async
			const deleteBook = await Book.findByIdAndDelete(req.params.id); //function is async
			console.log(
				"Successfully deletes a book **********************",
				deleteBook
			);
			res.json(deleteBook);
		} catch (errors) {
			console.log("@@@@@@@ errors DELETING A BOOK @@@@@@@");
			res.status(400).json(errors); //Client...frontend will be able to see message
		}
	},
};

export default BookController;
