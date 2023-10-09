import { Request, Response, Router } from "express";
import { deleteItem, getItem, patchItem, postItem, putItem } from "../controllers/item";

const router = Router();

router.get('/', getItem);
router.post('/', postItem);
router.put('/', putItem);
router.patch('/', patchItem);
router.delete('/', deleteItem);

export { router }