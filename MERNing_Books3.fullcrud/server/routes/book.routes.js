import { Router } from "express";
import BookController from "../controllers/book.controller.js";

// Creating a router variable
const router = Router();

// All routes with the /books path
router.route("/") //("/books")
	.get(BookController.getAll)
	.post(BookController.createOne);

// All routes with the /books/:id path
router.route("/:id") //("/books/:id")
	.get(BookController.getOne)
	.put(BookController.updateOne)
	.delete(BookController.deleteOne);

export default router;