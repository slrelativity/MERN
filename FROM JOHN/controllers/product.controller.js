import Product from "../models/product.model.js";

const ProductController = {
	getAll: async (req, res) => {
		try {
			const allProducts = await Product.find(); // without anything in (), find all
			res.json(allProducts);
		} catch (err) {
			console.log(err);
			res.status(400).json(err); // frontend would be able to receive the json as an error
		}
	},
	getOne: async (req, res) => {
		try {
			// const oneProduct = await Product.findOne({_id: req.params.id});
			const oneProduct = await Product.findById(req.params.id); // Both work!
			res.json(oneProduct);
		} catch (err) {
			console.log(err);
			res.status(400).json(err); // frontend would be able to receive the json as an error
		}
	},
	create: async (req, res) => {
		try {
			const newProduct = await Product.create(req.body); // mongoose functions are async
			res.json(newProduct);
		} catch (err) {
			console.log(err);
			res.status(400).json(err); // frontend would be able to receive the json as an error
		}
	},
	update: async (req, res) => {
		try {
			const options = {
				new: true, // returned result is the updated object
				runValidators: true, // to enable the validation in update
			};

			const updatedProduct = await Product.findByIdAndUpdate(
				req.params.id,
				req.body,
				options
			);
			res.json(updatedProduct);
		} catch (err) {
			console.log(err);
			res.status(400).json(err);
		}
	},
	delete: async (req, res) => {
		try {
			const deletedProduct = await Product.findByIdAndDelete(req.params.id);
			res.json(deletedProduct);
		} catch (err) {
			console.log(err);
			res.status(400).json(err);
		}
	},
};

export default ProductController;
