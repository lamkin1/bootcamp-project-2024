import React from "react";
// import { useRouter } from "next/router";
import { Blog } from "@/blogData"; // Import your blog data
import myBlogs from "@/blogData";
import Image from "next/image";
import style from "./page.module.css";

export default async function BlogPost({ params }: {params : {slug : string}}) {
  const { slug } = await params;
  const blog = myBlogs.find((b : Blog) => b.slug === slug);
  
    if (!blog) {
    return <p>Blog post not found.</p>
  }

  return (
    <div className={style['blog-post']}>
      <h1 className={style['blog-title']}>{blog.name}</h1>
      <Image className={style['blog-image']} src={blog.image} alt={blog.imageAlt} width={400} height={400}/>
      <p className={style["blog-date"]}>Posted on: {blog.posted}</p>
      <p className={style["blog-body"]}>{blog.description}</p>
    </div>
  );
}

