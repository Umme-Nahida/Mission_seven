import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`)
  const data = await res.json()

  console.log("data:",data)
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 items-center justify-self-center gap-6 m-20">
        {
          data.data?.map((post:any)=>(
            <BlogCard key={post.id} post={post}></BlogCard>
          ))
        }
      </div>
    </div>
  );
}
