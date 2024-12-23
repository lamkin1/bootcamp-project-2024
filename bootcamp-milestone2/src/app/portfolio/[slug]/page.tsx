import React from "react";
import Image from "next/image";
import style from "./page.module.css";
import Comment from "@/app/components/comments";
import { IComment } from "@/app/components/comments";

type Props = {
    params: {slug: string}
  }

export async function getProject(slug: string) {
	try{
        const res = await fetch(`http://localhost:3000/api/Portfolios/${slug}`, {
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

export default async function Portfolio({ params }: Props){
const { slug } = await params;
  const project = await getProject(slug);
  if (!project) {
    return <p>Project not found.</p>
  }

  if(!project){return <div>No project found.</div>}
  return (
    <div className={style['project-post']}>
      <h1 className={style['project-title']}>{project.name}</h1>
      <Image className={style['project-image']} src={project.image} alt={project.imageAlt} width={400} height={400}/>
      <p className={style["project-body"]}>{project.content}</p>
      <h2 className={style['comment-title']}>Comments</h2>
      <div className={style['comment-section']}>
        {project.comments && project.comments.length > 0 ? (project.comments.map((comment: IComment, index: number) => (
          <Comment key={index} comment={comment} />
        ))) : (
          <p>No comments.</p>
        )}
      </div>
    </div>
    )
}