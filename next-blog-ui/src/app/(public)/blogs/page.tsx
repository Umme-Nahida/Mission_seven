import BlogCard from "@/components/modules/Blogs/BlogCard";

const AllBlogsPage = async() => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`)
  const {data} = await res.json()

  console.log("data",data)
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>

      <div>
        {
          data?.map((post:any)=>(
            <BlogCard key={post.id} post={post} ></BlogCard>
          ))
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
