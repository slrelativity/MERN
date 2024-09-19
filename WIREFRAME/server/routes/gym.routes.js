import { Router } from "express";
import {createOneGym, getAllGyms, getOneGym, updateOneGym, deleteOneGym,} from "../controllers/gym.controllers.js"; //UPDATE!!


const router = Router();

router.get("/", getAllGyms);//UPDATE!!
router.post("/", createOneGym);//UPDATE!!


router.get("/:id", getOneGym);//UPDATE!!
router.put("/:id", updateOneGym);//UPDATE!!
router.delete("/:id", deleteOneGym);//UPDATE!!


export default router;