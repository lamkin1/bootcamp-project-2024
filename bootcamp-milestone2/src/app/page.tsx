import React from "react";
import style from "./page.module.css"
import BlogPreview from '@/components/blogPreview';
import myBlogs from '@/blogData';
import Image from "next/image";

export default function Home() {
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
    <div key='blog-previews' className={style['blog-previews']}>
      {myBlogs.map(blog => 
        <BlogPreview 
        key={blog.name}
        name={blog.name}
        description={blog.description}
        image={blog.image}
        posted={blog.posted}
        imageAlt={blog.imageAlt}
        slug={blog.slug}
        />
      )}
    </div>
  </div>
  );
}
