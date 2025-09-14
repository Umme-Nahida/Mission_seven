import express from "express";
import { userController } from "./user.controller";



const router = express.Router();

router.post('/create/',userController.createUser)
router.get('/',userController.getAllUsers)
router.get('/me/:id',userController.getUserById)
router.patch('/update/:id',userController.updateUser)
router.patch('/delete/:id',userController.deleteUser)

export const userRouter = router;