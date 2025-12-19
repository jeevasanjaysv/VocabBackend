import { Router } from "express";
import { addWrd, delById, fet_w_By_id, UpdateWrd } from "../controllers/wordControler.js";

const router=Router()
router.post('/',addWrd)
router.get('/',fet_w_By_id)
router.delete('/:id',delById)
router.put('/:id',UpdateWrd)

export default router