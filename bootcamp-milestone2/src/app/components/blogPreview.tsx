import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Link from "next/link";
import Blog from '@/database/blogSchema';

interface Props {
    name: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

export default function BlogPreview({name, date, description, image, imageAlt, slug}: Props) {
  return (
    <div className={style['blog-preview']}>
      <h3>
        <Link className={style['blog-link']} href={`/blog/${slug}`}> {name} </Link>
        </h3>
        <p>
            {date}
        </p>
        <div>
            <Image className={style['blog-image']} src={image} alt={imageAlt} width={200} height={200} ></Image>
            <p>{description}</p>
        </div>
    </div>
  );
}