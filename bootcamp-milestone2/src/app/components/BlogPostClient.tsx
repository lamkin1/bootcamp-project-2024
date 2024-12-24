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

  // State for managing the comments
  const [comments, setComments] = useState<IComment[]>(blog.comments || []);

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
      const res = await fetch(`/api/Blogs/${blog.slug}/comment`, { //https://bootcamp-project-2024-five.vercel.app
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to post comment");
      }

      // After successfully posting the comment, update the state
      const newComment: IComment = {
        user: formData.user,
        comment: formData.comment,
        time: new Date(),
      };

      // Update the local state to include the new comment
      setComments((prevComments) => [...prevComments, newComment]);

      // Clear the form data
      setFormData({ user: "", comment: "", time: new Date() });
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
        {comments.length > 0 ? (
          comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p>No comments.</p>
        )}
      </div>
      <div className={style['comment-form-div']}>
        <h2 className={style['comment-title']}>Add A Comment:</h2>
        <form className={style['comment-form']} onSubmit={handleSubmit}>
            
          <label className={style["comment-label"]} htmlFor="name">
            Name:
          </label>
          <input
            className={style["comment-text"]}
            type="text"
            id="user"
            name="user"
            value={formData.user}
            onChange={handleChange}
            required
          />
          <label className={style["comment-label"]} htmlFor="comment">
            Comment:
          </label>
          <textarea
            className={style["comment-text"]}
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
