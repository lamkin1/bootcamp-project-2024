// BlogPostClient.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import style from "./BlogPostClient.module.css";
import Comment from "@/app/components/comments";
import { IComment } from "@/app/components/comments";
import { Blog } from "@/database/blogSchema";

type BlogPostClientProps = {
  blog: Blog;
};

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  const [formData, setFormData] = useState({
    user: "",
    comment: "",
    time: new Date(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value || "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        const res = await fetch(`https://bootcamp-project-2024-five.vercel.app/api/Blogs/${blog.slug}/comment`, {
            method: "POST",
            body: JSON.stringify(formData),
        });

      if (!res.ok) {
        throw new Error("Failed to post comment");
        // throw new Error(JSON.stringify(formData));
      }

      setFormData({ user: "", comment: "", time: new Date() });
      window.location.reload();
    } catch (error) {
        console.error("Error submitting comment:", error, JSON.stringify(formData));
        return null;
    }
  };

  return (
    <div className={style["blog-post"]}>
      <h1 className={style["blog-title"]}>{blog.name}</h1>
      <Image
        className={style["blog-image"]}
        src={blog.image}
        alt={blog.imageAlt}
        width={400}
        height={400}
      />
      <p className={style["blog-date"]}>
        Posted on:{" "}
        {new Date(blog.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      <p className={style["blog-body"]}>{blog.content}</p>
      <h2 className={style["comment-title"]}>Comments</h2>
      <div className={style["comment-section"]}>
        {blog.comments && blog.comments.length > 0 ? (
          blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments.</p>
        )}
      </div>
      <div>
        <form className={style["contact-form"]} onSubmit={handleSubmit}>
          <label className={style["contact-label"]} htmlFor="name">
            Name:
          </label>
          <input
            className={style["contact-text"]}
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
          <label className={style["contact-label"]} htmlFor="comment">
            Comment:
          </label>
          <textarea
            className={style["contact-text"]}
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          ></textarea>
          <input className={style["submit-button"]} type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
