import React from "react";
import style from "./page.module.css";
import Project from "@/database/projectSchema"
import connectDB from "@/database/db";
import Image from "next/image";

export async function getProjects() {
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const projects = await Project.find().sort({ name: -1 }).orFail()
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
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

    return(
        <div>
            <h1 className="page-title">Portfolio</h1>
            <div id="project-container">
            
            {projects.map(project => 
                <div key={project.name} className={style['project-post']}>
                    <div className={style['project-body']}>
                        <h1 className={style['project-title']}>{project.name}</h1>
                        <Image src={project.image} alt={project.imageAlt} width={600} height={600}></Image>
                        <p className={style['project-content']}>{project.description}</p>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}