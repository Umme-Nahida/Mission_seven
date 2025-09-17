"use client"


import { useParams } from 'next/navigation';
import React from 'react';

const BlogDetails = () => {

    const {blogId} = useParams()
    console.log("id",blogId)
    return (
        <div>
            this is blog details pages
        </div>
    );
};

export default BlogDetails;