import { Router } from "express";
import { addRes, getQuiz } from "../controllers/quizControler.js";


const router=Router()
router.post("/",addRes)
router.get("/",getQuiz)

export default router