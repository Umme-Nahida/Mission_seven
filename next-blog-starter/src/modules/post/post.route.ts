import express from "express"
import { postController } from "./post.controller"


const router = express.Router()

router.post('/create',postController.createPost)
router.get('/',postController.getAllPost)
router.get('/me/:id',postController.getPost)
router.patch('/update/:id',postController.updatePost)
router.patch('/delete/:id',postController.deletePost)

export const postRouter = router;