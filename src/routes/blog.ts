import { Router } from "express";
import { deleteBlog, getBlog, patchBlog, postBlog, putBlog } from "../controllers/blog";

const router = Router();

router.get('/', getBlog);
router.post('/', postBlog);
router.put('/', putBlog);
router.patch('/', patchBlog);
router.delete('/', deleteBlog);

export { router }