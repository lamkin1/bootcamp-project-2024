// BlogPost.server.tsx
import React from "react";
import Image from "next/image";
import style from "./page.module.css";
import BlogPostClient from "@/app/components/BlogPostClient";
import { Blog } from "@/database/blogSchema";

type BlogProps = {
  params: { slug: string };
};

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`https://bootcamp-project-2024-five.vercel.app/api/Blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return await res.json();
  } catch (err) {
    console.log(`Error: ${err}`);
    return null;
  }
}

export default async function BlogPost({ params }: BlogProps) {
  const { slug } = await params;
  console.log(slug);
  const blog = await getBlog(slug);

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <BlogPostClient blog={blog} />
  );
}
