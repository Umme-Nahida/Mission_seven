import { Post, Prisma } from "@prisma/client"
import { prisma } from "../../config/db"

const createPost = async(payload:Prisma.PostCreateInput):Promise<Post>=>{

  const post = await prisma.post.create({
      data: payload
  })

  return post
}




// get all post 
const getAllPost = async()=>{

  const post = await prisma.post.findMany()

  return post
}

// get single post 
const getPost = async(id:number)=>{

  const post = await prisma.post.findUnique({
    where: {id}
  })

  return post
}


// get single post 
const updatePost = async(id:number, updateInfo:any)=>{

  const post = await prisma.post.updateMany({
    where: {id:id},
   data: updateInfo
  })

  return post
}


// delete post 
const deletePost = async(id:number)=>{

  const post = await prisma.post.delete({
    where: {id}
  })

  return post
}


export const postService = {
  createPost,
  getAllPost,
  getPost,updatePost, deletePost
}