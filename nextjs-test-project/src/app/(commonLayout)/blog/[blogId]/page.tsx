

const BlogDetails = async({params}: {params: Promise<{blogId:string}>}) => {

   
    console.log("id", await params)
    return (
        <div>
            this is blog details pages
        </div>
    );
};

export default BlogDetails;