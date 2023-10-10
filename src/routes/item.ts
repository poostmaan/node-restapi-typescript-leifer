import { Request, Response, Router } from "express";
import { deleteItem, getItem, getItems, patchItem, postItem, putItem } from "../controllers/item";

const router = Router();

router.get('/:id', getItem);
router.get('/', getItems);
router.post('/', postItem);
router.put('/:id', putItem);
router.patch('/', patchItem);
router.delete('/:id', deleteItem);

export { router }