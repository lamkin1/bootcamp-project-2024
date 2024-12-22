import React from "react";
// import { useRouter } from "next/router";
import { Blog } from "@/app/blogData"; // Import your blog data
import myBlogs from "@/app/blogData";
import Image from "next/image";
import style from "./page.module.css";
import { getBlogs } from "@/app/blogs/page";

export default async function BlogPost({ params }: {params : {slug : string}}) {
  const { slug } = await params;
  const blogs = await getBlogs();
  if (!blogs) {
    return <p>Blog post not found.</p>
  }
  const blog = blogs.find((b : Blog) => b.slug === slug);

  if(!blog){return <div>No Blog Post Found.</div>}
  
    

  return (
    <div className={style['blog-post']}>
      <h1 className={style['blog-title']}>{blog.name}</h1>
      <Image className={style['blog-image']} src={blog.image} alt={blog.imageAlt} width={400} height={400}/>
      <p className={style["blog-date"]}>Posted on: {blog.date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })}</p>
      <p className={style["blog-body"]}>{blog.content}</p>
    </div>
  );
}

