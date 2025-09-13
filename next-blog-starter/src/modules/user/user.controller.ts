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


export const userController = {
    createUser
}