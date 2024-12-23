import React from "react";
import Image from "next/image";
import style from "./page.module.css";
import Comment from "@/app/components/comments";
import { IComment } from "@/app/components/comments";
import { Blog } from "@/database/blogSchema";

type BlogProps = {
  params: Promise<{slug: string}>;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try{
      const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
          cache: "no-store",	
      })

      if (!res.ok) {
          throw new Error("Failed to fetch blog");
      }
      return res.json();
} catch (err: unknown) {
  console.log(`error: ${err}`);
  return null;
  // `` are a special way of allowing JS inside a string
  // Instead of "error: " + err, we can just do the above
  // it is simular to formated strings in python --> f"{err}"
}
}

export default async function BlogPost({ params }: BlogProps) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) {
    return <p>Blog post not found.</p>
  }

  if(!blog){return <div>No Blog Post Found.</div>}
  return (
    <div className={style['blog-post']}>
      <h1 className={style['blog-title']}>{blog.name}</h1>
      <Image className={style['blog-image']} src={blog.image} alt={blog.imageAlt} width={400} height={400}/>
      <p className={style["blog-date"]}>Posted on: {new Date(blog.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })}</p>
      <p className={style["blog-body"]}>{blog.content}</p>
      <h2 className={style['comment-title']}>Comments</h2>
      <div className={style['comment-section']}>
        {blog.comments && blog.comments.length > 0 ? (blog.comments.map((comment: IComment, index: number) => (
          <Comment key={index} comment={comment} />
        ))) : (
          <p>No comments.</p>
        )}
      </div>
    </div>
  );
}

