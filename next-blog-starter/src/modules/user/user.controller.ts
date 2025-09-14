import { Request, Response } from "express"
import { userService } from "./user.service"

const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.createUser(req.body)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAllUsers()
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}

const getUserById = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUser(Number(req.params.id))
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}

const updateUser = async (req: Request, res: Response) => {
    try {

        const id = Number(req.params.id);
        const updateInfo = req.body;
        const result = await userService.updateUser(id,updateInfo)
        res.status(201).send(result)
    } catch (err) {
        console.log(err)
    }
}


const deleteUser = async (req: Request, res: Response) => {
    try {

        const id = Number(req.params.id);
        const result = await userService.deleteUser(id)
        res.status(201).send(result)
    } catch (err) {
        console.log(err)
    }
}


export const userController = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}