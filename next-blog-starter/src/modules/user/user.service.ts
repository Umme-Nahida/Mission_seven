import { Prisma, User } from "@prisma/client"
import { prisma } from "../../config/db"


const createUser = async(payload:Prisma.UserCreateInput):Promise<User>=>{

  const user = await prisma.user.create({
      data: payload
  })

  return user
}


const getAllUsers = async()=>{

  const users = await prisma.user.findMany({
  select: {
    id: true,
    name: true,
    email: true,
    phone: true,
    role: true,
    status: true,
    isVerified: true,
    createdAt: true,
    updatedAt: true,
    address:true,
    picture:true
  },
  orderBy:{
    createdAt:"desc"
  }
})

  return users
}

const getUser = async(id:number)=>{

  const user = await prisma.user.findUnique({
  where: {
    id
  },
  select: {
    id: true,
    name: true,
    email: true,
    phone: true,
    role: true,
    status: true,
    isVerified: true,
    createdAt: true,
    updatedAt: true,
    address:true,
    picture:true
  }
})

  return user
}

// update user api
const updateUser = async(id:number,updatInfo:any)=>{

  const userUpdated = await prisma.user.updateMany({
  where: {
    id
  },
  data: updatInfo
})

  return userUpdated
}


// update user api
const deleteUser = async(id:number)=>{

  const user = await prisma.user.delete({
  where: {
    id
  }
})

  return user
}


export const userService = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}