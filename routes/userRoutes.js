import { Router } from "express";
import { add, editUser, getRuser, getUserByEmail } from "../controllers/userControler.js";


const router=Router()
router.post('/',add)
router.put('/:id',editUser)
router.get('/',getRuser)
router.get('/byEmail',getUserByEmail)
export default router
