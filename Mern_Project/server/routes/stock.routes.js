import { Router } from "express";
import { getStocks } from "../controllers/stock.controllers.js";


const router = Router();

router.get("/", getStocks);


export default router;