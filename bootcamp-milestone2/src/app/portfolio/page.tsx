import React from "react";
import style from "./page.module.css";
import Project from "@/database/projectSchema"
import connectDB from "@/database/db";
import Image from "next/image";
import Link from "next/link";


export async function getProjects() {
    await connectDB()

	try {
        const projects = await Project.find().orFail();
        
        console.log(projects)
	    return projects
	} catch (err) {
        console.log('err');
	    return null
	}
}

export default async function Portfolio() {
    const projects = await getProjects();

    if(!projects) {
        return (
            <div>
            <h1 className="page-title">Portfolio</h1>
            <h2>No Projects Found.</h2>
        </div>
        )
    }

    console.log(projects.map(p => p.slug));

    return(
        <div>
            <h1 className="page-title">Portfolio</h1>
            <div id="project-container">
            
            {projects.map(project => 
                <div key={project.name} className={style['project-post']}>
                    <div className={style['project-body']}>
                        <Link className={style['project-link']} href={`/portfolio/${project.slug}`}> {project.name} </Link>
                        <Link href={`/portfolio/${project.slug}`}> 
                            <Image src={project.image} alt={project.imageAlt} width={600} height={600}></Image>
                        </Link>
                        <p className={style['project-content']}>{project.description}</p>
                    </div>
                </div>
            )}
            
            </div>
        </div>
    )
}