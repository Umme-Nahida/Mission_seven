import { Request, Response } from "express"
import { postService } from "./post.service"

const createPost = async (req: Request, res: Response) => {
    try {
        const result = await postService.createPost(req.body)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}


const getAllPost = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1
        const limit = Number(req.query.limit) || 10;
        const search = (req.query.search as string)|| ""
        const result = await postService.getAllPost({page,limit,search})
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}

// get single post 
const getPost = async (req: Request, res: Response) => {
    try {
        const result = await postService.getPost(Number(req.params.id))
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}


// get single post 
const updatePost = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const updateInfo = req.body;
        const result = await postService.updatePost(id,updateInfo)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}


//delete single post in database
const deletePost = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        const result = await postService.deletePost(id)
        res.send(result)
    } catch (err) {
        console.log(err)
    }
}

export const postController = {
    createPost,
    getAllPost,
    getPost,
    deletePost,
    updatePost
}
