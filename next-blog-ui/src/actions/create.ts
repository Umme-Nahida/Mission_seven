"use server"

import { redirect } from "next/navigation"

export const create = async(data:FormData)=>{

    // to conver the data in plain object
    const blogInfo = Object.fromEntries(data.entries())
    const modifyData = {
        ...blogInfo,
        id:10,
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
        redirect("/blogs")
    }
    console.log("result---------:",result)
}