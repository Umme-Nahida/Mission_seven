import { PrismaClient } from '../generated/prisma/index.js'


const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  console.log("hello prisma how about you")

  // const result = await prisma.user.create({
  //   data:{
  //     name:"Nahida khatun",
  //     email:"nahida@gmail.com",
  //     profile:"profile default"
  //   }
  // })

  const result = await prisma.user.findMany()
  console.log("result",result)

  // const update = await prisma.user.updateMany({
  //   where:{
  //     email: "nahida@gmail.com"
  //   },

  // })
}

main()

