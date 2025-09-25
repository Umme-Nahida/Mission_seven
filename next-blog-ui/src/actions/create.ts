"use server"

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export const create = async(data:FormData)=>{

    // to conver the data in plain object
    const blogInfo = Object.fromEntries(data.entries())
    const modifyData = {
        ...blogInfo,
        id:12,
        authorId:2,
        isFeatured: Boolean(blogInfo.isFeatured),
        tags:blogInfo.tags.toString().split(",").map((tag)=>tag.trim())
    }
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`,{
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify(modifyData)
    })

    const result = await res.json()
    if(result.id){
        revalidateTag("refetchBlogs")
        redirect("/")
    }
    console.log("result---------:",result)
}