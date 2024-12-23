import React from "react";
import style from "./page.module.css"
import BlogPreview from '@/app/components/blogPreview';
import connectDB from "@/database/db";
import Blog from '@/database/blogSchema';

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div>
      <h1 className="page-title">Howdy!</h1>
      <div className={style.about}>
      <div className={style['about-image']}>
        <img src='/assets/images/James_pic.jpg'
            alt="Picture of James Lamkin"/>
      </div>
      <div className={style["about-text"]}>
        <p>
          Hello, I am <strong>James Lamkin</strong>! I&apos;m a 4th year  <em>Computer Science</em> major
          at <strong>Cal Poly SLO</strong>,
          concentrating in Machine Learning and Artifical
          Intelligence,
          with a minor in <em>Data Science</em>. I am from
          Boise, Idaho and have been living in
          San Luis Obispo, California for the
          past few years attending college.
          <br/>
          <br/>
          I spend my free time running <strong>Cal
          Poly Roundnet</strong> <em>(Spikeball)</em> as
          the
          club
          president,
          playing music,
          and various types of games!
        </p>
        <div id={style["about-links"]}>
          <a className={style["about-link"]}
              href="https://www.linkedin.com/in/james-lamkin/">LinkedIn</a>
          |
          <a className={style["about-link"]}
              href="https://github.com/lamkin1">Github</a>
        </div>
      </div>
    </div>
    <div key='blog-previewss' className={style['blog-previews']}>
      {blogs ? (
        blogs.map((b) => {
          return(
          <BlogPreview
            key={b.name}
            name={b.name}
            description={b.description}
            image={b.image}
            date={b.date.toLocaleDateString()}
            imageAlt={b.imageAlt}
            slug={b.slug}
          />
          )})
      ) : (
        <p>No Blogs Found.</p>
      )}
    </div>
  </div>
  );
}
