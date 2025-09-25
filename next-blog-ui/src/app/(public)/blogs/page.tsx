import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IPost } from "@/types";

const AllBlogsPage = async() => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`,{
     next:{
       tags:["refetchBlogs"]
     }
  })
  const {data} = await res.json()

  console.log("data",data)
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs Abcs</h2>

      <div className="grid grid-cols-3 items-center justify-self-center gap-6 mx-10 mt-10">
        {
          data?.map((post:IPost)=>(
            <BlogCard key={post.id} post={post} ></BlogCard>
          ))
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
