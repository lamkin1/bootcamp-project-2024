import React from "react";
import style from "./page.module.css";
import '../globals.css';

export default function Resume() {
    return(
    <div>
        <div className={style['resume-page']}>
            <h1 className="page-title">Resume</h1>
            
            <div className={style.resume}>
                <section className={style['section']}>
                    <h2 className={style['section-title']}>
                        Education
                    </h2>
                    <div className={style.entry}>
                        <h3 className={style["entry-title"]}>Bachelor of Science in Computer
                            Science | Minor in Data Science</h3>
                        <p className={style["entry-info"]}>
                            <em>California Polytechnic State University, San
                                Luis Obispo</em>
                            <br></br>
                            June 2025
                        </p>
                    </div>
                </section>
                <section className={style.section}>
                    <h2 className={style['section-title']}>
                        Experience
                    </h2>
                    <div className={style.entry}>
                        <h3 className={style['entry-title']}>Web Master and Software
                            Developer</h3>
                        <p className={style['entry-info']}>
                            <em>California Center for Construction Education
                                (C.C.C.E)</em>
                            <br></br>
                            March 2023 - Present
                        </p>
                        <ul className={style['entry-description']}>
                            <li>Manage the daily maintenance of Cal Poly&apos;s
                                C.C.C.E. website and consistently implement
                                design improvements</li>
                            <li>Support the facilitation of C.C.C.E
                                recruiting events such as the Construction
                                Management Career Fair</li>
                            <li>Designed and established infrastructure
                                enabling REST API integration to automate
                                real-time updates of website content</li>
                            <li>Implemented webhooks to deliver
                                instantaneous updates on recruitment
                                registration and infrastructure health</li>
                            <li>Designing and Developing a Flutter/Dart
                                mobile application utilizing Firebase for
                                data storage and management</li>
                        </ul>
                    </div>
                </section>
                <section className={style.section}>
                    <h2 className={style['section-title']}>
                        Projects
                    </h2>
                    <div className={style.entry}>
                        <h3 className={style['entry-title']}>
                            <strong>
                                Pose Master
                            </strong>
                        </h3>
                        <p className={style['entry-info']}>
                            <em>Computer Vision Final Project</em>
                            <br></br>
                            <em>Python, OpenCV</em>
                            <br></br>
                            November 2023
                        </p>
                        <ul className={style['entry-description']}>
                            <li>Utilized OpenPose body detection and
                                OpenCV&apos;s deep neural network for real-time
                                dance pose comparison</li>
                            <li>Implemented algorithms to measure variance
                                between user and reference/test dances</li>
                        </ul>
                    </div>
                    <div className={style.entry}>
                        <h3 className={style['entry-title']}>
                            <strong>
                                Soccer Match Outcome Prediction
                            </strong>
                        </h3>
                        <p className={style['entry-info']}>
                            <em>Knowledge Discovery from Data Final Project</em>
                            <br></br>
                            <em>Python, Scikit-learn, Pandas</em>
                            <br></br>
                            June 2023
                        </p>
                        <ul className={style['entry-description']}>
                            <li>Designed and implemented a soccer match
                                outcome prediction system using Random
                                Forest and Bayesian Classifier</li>
                            <li>Integrated diverse datasets encompassing
                                historical match data and team performance
                                metrics</li>
                        </ul>
                    </div>
                    <div className={style.entry}>
                        <h3 className={style['entry-title']}>
                            <strong>
                                Spider World
                            </strong>
                        </h3>
                        <p className={style['entry-info']}>
                            <em>Introduction to Software Engineering Final
                                Project</em>
                            <br></br>
                            <em>Java</em>
                            <br></br>
                            June 2023
                        </p>
                        
                        <ul className={style['entry-description']}>
                            <li>Designed and implemented a soccer match
                                outcome prediction system using Random
                                Forest and Bayesian Classifier</li>
                            <li>Integrated diverse datasets encompassing
                                historical match data and team performance
                                metrics</li>
                        </ul>
                    </div>
                </section>
                <section className={style.section}>
                    <h2 className={style['section-title']}>
                        Skills
                    </h2>
                    <div className={style["skills-category"]}>
                        <h3>Languages/Framework:</h3>
                        <ul className={style['skills-list']}>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C</li>
                            <li>JavaScript</li>
                            <li>Flutter</li>
                            <li>Dart</li>
                            <li>SQL</li>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>R</li>
                        </ul>
                    </div>
                    <div className={style["skills-category"]}>
                        <h3>Tools:</h3>
                        <ul className={style['skills-list']}>
                            <li>Scikit-learn</li>
                            <li>OpenCV</li>
                            <li>NumPy</li>
                            <li>Unix</li>
                            <li>Vim</li>
                            <li>Github</li>
                        </ul>
                    </div>

                </section>
                <section className={style.section}>
                    <h2 className={style['section-title']}>
                        Coursework
                    </h2>
                    <ul className={style['entry-description']}>
                        <li>Operating Systems</li>
                        <li>Intro to Data Science</li>
                        <li>Programming Languages</li>
                        <li>Computer Vision</li>
                        <li>Knowledge Discovery from Data</li>
                        <li>Computer Security</li>
                        <li>Database Systems</li>
                        <li>Introduction to Software Engineering</li>
                        <li>Algorithms</li>
                        <li>Systems Programming</li>
                        <li>Data Structures</li>
                        <li>Object-Oriented Programming</li>
                    </ul>
                </section>
            </div>
        </div>
        <div className="center-horizontal"> 
                <a id={style['download-resume']} href="/assets/documents/resume.pdf" download>Download</a>
        </div>
    </div>
);
}
