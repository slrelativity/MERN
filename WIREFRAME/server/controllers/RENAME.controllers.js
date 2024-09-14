///import Store from "../models/store.model.js"; UPDATE!!

const BookController = { //UPDATE+++++++++++
	getAll: async (req, res) => {
		console.log("Reached controller getAll");
		try {
			const getAllBooks = await Book.find(); //UPDATE++++++++++
			console.log("******* Successfully collection!!**********", getAllBooks); //UPDATE++++++++++
			res.json(getAllBooks); //UPDATE++++++++++++
		} catch (errors) {
			console.log("@@@@@@@@ ERRORS CREATING COLLECTIONS @@@@@@@");
			res.status(400).json(errors); 
		}
	},




	getOne: async (req, res) => {
		try {
			const oneBook = await Book.findById(req.params.id); //UPDATE++++++++++++
			console.log("******* Successfully collection!!**********", oneBook); //UPDATE++++++++++++
			res.json(oneBook); //UPDATE++++++++++++
		} catch (errors) {
			console.log("@@@@@@@@ ERRORS CREATING COLLECTIONS @@@@@@@");
			res.status(400).json(errors); 
		}
	},




	createOne: async (req, res) => {
		try {
			const newBook = await Book.create(req.body); //UPDATE++++++++++++
			console.log("******* Successfully collection!!**********", newBook); //UPDATE++++++++++++
			res.json(newBook); //UPDATE++++++++++++
		} catch (errors) {
			console.log("@@@@@@@@ ERRORS CREATING COLLECTIONS @@@@@@@");
			res.status(400).json(errors);
		}
	},




	updateOne: async (req, res) => {
		const options = {new: true,	runValidators: true,};
		try {
			const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, options);//UPDATE++++++++++++
			console.log("******* Successfully collection!!**********", updateBook); //UPDATE++++++++++++
			res.json(updateBook); //UPDATE++++++++++++
		} catch (errors) {
			console.log("@@@@@@@@ ERRORS CREATING COLLECTIONS @@@@@@@");
			res.status(400).json(errors); 
		}
	},




	deleteOne: async (req, res) => {
		try {
			const deleteBook = await Book.findByIdAndDelete(req.params.id); //UPDATE++++++++++++
			console.log("******* Successfully collection!!**********", deleteBook); //UPDATE++++++++++++
			res.json(deleteBook);//UPDATE++++++++++++
		} catch (errors) {
			console.log("@@@@@@@@ ERRORS CREATING COLLECTIONS @@@@@@@");
			res.status(400).json(errors); 
		}
	},
};

export default BookController;