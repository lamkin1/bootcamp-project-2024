import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";


import { Blog } from '@/app/blogData';

export default function BlogPreview(props: Blog) {
  return (
    <div className={style['blog-preview']}>
      <h3>
        <Link className={style['blog-link']} href={`/blog/${props.slug}`}> {props.name} </Link>
        </h3>
        <p>{props.posted}</p>
        <div>
            <Image className={style['blog-image']} src={props.image} alt={props.imageAlt} width={200} height={200} ></Image>
            <p>{props.description}</p>
        </div>
    </div>
  );
}