import { NextResponse } from "next/server";

export const blogs = [
        {
            "id": 12,
            "title": "Hello Prisma courses",
            "content": "This is a Prisma course, it will help you to learn Prisma and prepare yourself for a great job",
            "thumbnail": "https://images.unsplash.com/photo-1758640920659-0bb864175983?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D",
            "isFeatured": true,
            "tags": [
                "tailwind",
                "css",
                "frontend",
                "Reactjs"
            ],
            "views": 0,
            "authorId": 2,
            "createdAt": "2025-09-25T20:41:18.744Z",
            "updatedAt": "2025-09-25T20:41:18.744Z",
            "author": {
                "id": 2,
                "name": "Umme Nahida",
                "email": "nahida@example.com",
                "password": "hashed_password_2",
                "role": "ADMIN",
                "phone": "01710000002",
                "picture": "https://randomuser.me/api/portraits/women/21.jpg",
                "status": "ACTIVE",
                "isVerified": true,
                "createdAt": "2025-09-18T08:00:00.000Z",
                "updatedAt": "2025-09-23T14:20:00.000Z"
            }
        },
        {
            "id": 11,
            "title": "How to learn networking skill ",
            "content": "This is content data ",
            "thumbnail": "https://picsum.photos/200/300?random=7",
            "isFeatured": true,
            "tags": [
                "tailwind",
                "css",
                "frontend",
                "Reactjs"
            ],
            "views": 0,
            "authorId": 2,
            "createdAt": "2025-09-25T20:38:34.552Z",
            "updatedAt": "2025-09-25T20:38:34.552Z",
            "author": {
                "id": 2,
                "name": "Umme Nahida",
                "email": "nahida@example.com",
                "password": "hashed_password_2",
                "role": "ADMIN",
                "phone": "01710000002",
                "picture": "https://randomuser.me/api/portraits/women/21.jpg",
                "status": "ACTIVE",
                "isVerified": true,
                "createdAt": "2025-09-18T08:00:00.000Z",
                "updatedAt": "2025-09-23T14:20:00.000Z"
            }
        },
        {
            "id": 10,
            "title": "CSE Fundamental ",
            "content": "Discover how to build modern, responsive UIs quickly with Tailwind CSS utility-first framework",
            "thumbnail": "https://picsum.photos/200/300?random=7",
            "isFeatured": true,
            "tags": [
                "tailwind",
                "css",
                "frontend",
                "Reactjs"
            ],
            "views": 0,
            "authorId": 2,
            "createdAt": "2025-09-25T20:26:58.925Z",
            "updatedAt": "2025-09-25T20:26:58.925Z",
            "author": {
                "id": 2,
                "name": "Umme Nahida",
                "email": "nahida@example.com",
                "password": "hashed_password_2",
                "role": "ADMIN",
                "phone": "01710000002",
                "picture": "https://randomuser.me/api/portraits/women/21.jpg",
                "status": "ACTIVE",
                "isVerified": true,
                "createdAt": "2025-09-18T08:00:00.000Z",
                "updatedAt": "2025-09-23T14:20:00.000Z"
            }
        },
        {
            "id": 9,
            "title": "Mastering Shadcn ui",
            "content": "Discover how to build modern, responsive UIs quickly with Tailwind CSS utility-first framework.",
            "thumbnail": "https://picsum.photos/200/300?random=7",
            "isFeatured": false,
            "tags": [
                "tailwind",
                "css",
                "frontend"
            ],
            "views": 63,
            "authorId": 3,
            "createdAt": "2025-09-25T08:05:30.456Z",
            "updatedAt": "2025-09-25T18:44:11.987Z",
            "author": {
                "id": 3,
                "name": "Rifat Hossain",
                "email": "rifat@example.com",
                "password": "hashed_password_3",
                "role": "USER",
                "phone": "01710000003",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-19T11:30:00.000Z",
                "updatedAt": "2025-09-23T14:20:00.000Z"
            }
        },
        {
            "id": 8,
            "title": "Mastering Tailwind CSS with Shadcn ui",
            "content": "Discover how to build modern, responsive UIs quickly with Tailwind CSS utility-first framework.",
            "thumbnail": "https://picsum.photos/200/300?random=7",
            "isFeatured": false,
            "tags": [
                "tailwind",
                "css",
                "frontend"
            ],
            "views": 66,
            "authorId": 3,
            "createdAt": "2025-09-25T07:42:18.548Z",
            "updatedAt": "2025-09-25T19:29:41.358Z",
            "author": {
                "id": 3,
                "name": "Rifat Hossain",
                "email": "rifat@example.com",
                "password": "hashed_password_3",
                "role": "USER",
                "phone": "01710000003",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-19T11:30:00.000Z",
                "updatedAt": "2025-09-23T14:20:00.000Z"
            }
        },
        {
            "id": 7,
            "title": "Mastering Tailwind CSS",
            "content": "Discover how to build modern, responsive UIs quickly with Tailwind CSS utility-first framework.",
            "thumbnail": "https://picsum.photos/200/300?random=7",
            "isFeatured": false,
            "tags": [
                "tailwind",
                "css",
                "frontend"
            ],
            "views": 67,
            "authorId": 3,
            "createdAt": "2025-09-25T07:36:08.900Z",
            "updatedAt": "2025-09-25T18:03:42.171Z",
            "author": {
                "id": 3,
                "name": "Rifat Hossain",
                "email": "rifat@example.com",
                "password": "hashed_password_3",
                "role": "USER",
                "phone": "01710000003",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-19T11:30:00.000Z",
                "updatedAt": "2025-09-23T14:20:00.000Z"
            }
        },
        {
            "id": 6,
            "title": "Next.js Performance Optimization",
            "content": "Learn how to optimize your Next.js app with image optimization, caching, and SSR.",
            "thumbnail": "https://picsum.photos/200/300?random=6",
            "isFeatured": true,
            "tags": [
                "nextjs",
                "performance",
                "frontend"
            ],
            "views": 97,
            "authorId": 6,
            "createdAt": "2025-09-25T07:17:08.959Z",
            "updatedAt": "2025-09-25T18:03:42.299Z",
            "author": {
                "id": 6,
                "name": "Ayesha Khan",
                "email": "ayesha@example.com",
                "password": "hashed_password_6",
                "role": "USER",
                "phone": "01710000006",
                "picture": "https://randomuser.me/api/portraits/women/20.jpg",
                "status": "ACTIVE",
                "isVerified": true,
                "createdAt": "2025-09-18T12:00:00.000Z",
                "updatedAt": "2025-09-24T09:30:00.000Z"
            }
        },
        {
            "id": 1,
            "title": "Getting Started with Next.js",
            "content": "Next.js is a powerful React framework that makes building web apps easier.",
            "thumbnail": "https://picsum.photos/200/300?random=1",
            "isFeatured": true,
            "tags": [
                "nextjs",
                "react",
                "javascript"
            ],
            "views": 121,
            "authorId": 1,
            "createdAt": "2025-09-20T12:00:00.000Z",
            "updatedAt": "2025-09-25T18:03:42.378Z",
            "author": {
                "id": 1,
                "name": "Nahid Hasan",
                "email": "nahid@example.com",
                "password": "hashed_password_1",
                "role": "USER",
                "phone": "01710000001",
                "picture": "https://randomuser.me/api/portraits/men/11.jpg",
                "status": "ACTIVE",
                "isVerified": true,
                "createdAt": "2025-09-20T10:15:00.000Z",
                "updatedAt": "2025-09-23T14:20:00.000Z"
            }
        },
        {
            "id": 3,
            "title": "TypeScript for Beginners",
            "content": "Learn the basics of TypeScript and why it's so popular among developers.",
            "thumbnail": "https://picsum.photos/200/300?random=3",
            "isFeatured": false,
            "tags": [
                "typescript",
                "javascript"
            ],
            "views": 77,
            "authorId": 3,
            "createdAt": "2025-09-19T09:10:00.000Z",
            "updatedAt": "2025-09-25T18:04:58.481Z",
            "author": {
                "id": 3,
                "name": "Rifat Hossain",
                "email": "rifat@example.com",
                "password": "hashed_password_3",
                "role": "USER",
                "phone": "01710000003",
                "picture": null,
                "status": "ACTIVE",
                "isVerified": false,
                "createdAt": "2025-09-19T11:30:00.000Z",
                "updatedAt": "2025-09-23T14:20:00.000Z"
            }
        },
        {
            "id": 2,
            "title": "Tailwind CSS Best Practices",
            "content": "Tailwind CSS gives you the freedom to design fast without writing custom CSS.",
            "thumbnail": "https://picsum.photos/200/300?random=2",
            "isFeatured": false,
            "tags": [
                "tailwind",
                "css",
                "frontend"
            ],
            "views": 91,
            "authorId": 2,
            "createdAt": "2025-09-18T15:30:00.000Z",
            "updatedAt": "2025-09-25T18:04:58.482Z",
            "author": {
                "id": 2,
                "name": "Umme Nahida",
                "email": "nahida@example.com",
                "password": "hashed_password_2",
                "role": "ADMIN",
                "phone": "01710000002",
                "picture": "https://randomuser.me/api/portraits/women/21.jpg",
                "status": "ACTIVE",
                "isVerified": true,
                "createdAt": "2025-09-18T08:00:00.000Z",
                "updatedAt": "2025-09-23T14:20:00.000Z"
            }
        }
    ];







export const GET = async()=>{
    return Response.json({message:"hello world"})
}


export const POST = async(request:Request)=>{
    const blog = await request.json()


    const newBlog = {
        ...blog,
        id: blogs.length + 1
    }

    blogs.push(newBlog)

    return new NextResponse(JSON.stringify(newBlog),{
        status:201,
        headers:{
            "Content-Type": "application/json"
        }
    })
}