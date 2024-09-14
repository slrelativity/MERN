import { Router } from "express";
import {createOne, getAll, getOne, updateOne, deleteOne,} from "../controllers/store.controller.js"; //UPDATE!!


const router = Router();

router.get("/", getAll);//UPDATE!!
router.post("/", createOne);//UPDATE!!


router.get("/:id", getOne);//UPDATE!!
router.put("/:id", updateOne);//UPDATE!!
router.delete("/:id", deleteOne);//UPDATE!!


export default router;



