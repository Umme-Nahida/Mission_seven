import { IPost } from "@/types";
import { Description } from "@radix-ui/react-dialog";
import { time } from "console";
import Image from "next/image";
import { title } from "process";

export const generateStaticParams = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`)
  const {data:blogs} = await res.json()

  return blogs.slice(0,5).map((blog:IPost)=>({
    blogId: String(blog.id)
  }))
}



export const generateMetadata = async({params}:{params: Promise<{blogId:string}>})=>{
    const { blogId } = await params; // /posts/:id route
  

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${blogId}`)
  const post = await res.json()

  return {
    title: post.title,
    description: post.content 
  }
}

export default async function PostDetails({params}:{params: Promise<{blogId:string}>}) {
  const { blogId } = await params; // /posts/:id route
  

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${blogId}`)
  const post = await res.json()
//   console.log(post)
//   if (!post) {
//     return <p className="text-center mt-10">Loading post...</p>;
//   }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {post.thumbnail && (
        <Image
          src={post.thumbnail}
          alt={post.title}
          width={2000}
          height={100}
          className="max-h-96 bg-cover rounded-lg mb-6"
        />
      )}

      <div className="flex items-center gap-3 mb-6">
        <img
          src={post.author?.picture ?? "https://via.placeholder.com/50"}
          alt={post.author?.name}
          className="w-12 h-12 rounded-full border"
        />
        <div>
          <p className="font-semibold">{post.author?.name ?? "Unknown Author"}</p>
          <p className="text-sm text-gray-500">
            {post.author?.isVerified ? "✅ Verified Author" : "Unverified"}
          </p>
        </div>
      </div>

      <p className="text-lg leading-relaxed text-gray-800">{post.content}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags?.map((tag: string[], idx:number) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-6 text-gray-600 text-sm">
        <p>👁️ {post.views} views</p>
        <p>🕒 Published: {new Date(post.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
