import React from "react";
import style from "./page.module.css";

export default function About() {
    return(
        <div>
            <h1 className='page-title'>Contact Me</h1>
        <div className={style['contact-form']}>
            <form id="contact-form">
                <label className={style['contact-label']} htmlFor="name">Name: </label>
                <input className={style['contact-text']} type="text" id="name" name="name" required/>
                <label className={style['contact-label']}  htmlFor="email">Email: </label>
                <input className={style['contact-text']} type="text" id="email" required/>
                <label className={style['contact-label']}  htmlFor="message">Message: </label>
                <textarea className={style['contact-text']} id="message" name="message" required></textarea>
                <input id="contact-submit-btn" type="submit"/>
            </form>
        </div>
        </div>
    )
}