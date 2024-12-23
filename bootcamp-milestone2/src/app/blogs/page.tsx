import React from "react";
import style from "./page.module.css";
import Blog from "@/database/blogSchema";
import connectDB from "@/database/db";
import Link from "next/link";
import Image from "next/image";

async function getBlogs() {
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch {
	    return null;
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

    console.log(blogs.map(p => p.slug));

    return(
        <div>
            <h1 className="page-title">Blogs</h1>
            <div key="blog-container" id="blog-container">
            
            {blogs.map(blog => 
                <div key={blog.name} className={style['blog-post']}>
                    <div className={style['blog-body']}>
                        <Link className={style['blog-link']} href={`/blog/${blog.slug}`}> {blog.name} </Link>
                        <Link href={`/blog/${blog.slug}`}> 
                            <Image src={blog.image} alt={blog.imageAlt} width={400} height={400}></Image>
                        </Link>
                        <p className={style['blog-content']}>{blog.description}</p>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}