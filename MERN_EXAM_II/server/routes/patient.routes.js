import { Router } from "express";
import { getAllPatients, createOnePatient, getOnePatient, updateOnePatient, deleteOnePatient } from "../controllers/patient.controllers.js";


const router = Router();

router.get("/", getAllPatients);//UPDATE!!
router.post("/", createOnePatient);//UPDATE!!


router.get("/:id", getOnePatient);//UPDATE!!
router.put("/:id", updateOnePatient);//UPDATE!!
router.delete("/:id", deleteOnePatient);//UPDATE!!

export default router;