import { Router } from "express";
import { addStore, getAllStores, getOneStore, updateStore, deleteStore } from "../controllers/store.controller.js";


const router = Router();


router.get ("/", getAllStores);
router.get ("/:id" , getOneStore);
router.post("/", addStore);
router.put ("/:id", updateStore);
router.delete ("/:id", deleteStore);

export default router;