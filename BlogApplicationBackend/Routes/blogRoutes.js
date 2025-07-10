import express from 'express';
import { getAllBlogs, createBlog, updateBlog, deleteBlog } from '../Controller/blogController.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', createBlog);
router.patch('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;