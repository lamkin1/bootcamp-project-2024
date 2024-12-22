import React from "react";
import style from "./page.module.css";
import Blog from "@/database/blogSchema"
import connectDB from "@/database/db";
import Link from "next/link";

async function getBlogs(){
    console.log("Type of connectDB?", typeof connectDB);

	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function Blogs(){
    const blogs = await getBlogs();

    if(!blogs) { return (
        <div>
            <h1 className="page-title">Blogs</h1>
            <h2>No Blogs Found.</h2>
        </div>
    )}

    return(
        <div>
            <h1 className="page-title">Blogs</h1>
            <div id="blog-container">
            
            {blogs.map(blog => 
                <div className={style['blog-post']}>
                    <div className={style['blog-body']}>
                        <Link className={style['blog-link']} href={`/blog/${blog.slug}`}> {blog.name} </Link>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}