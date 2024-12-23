"use client"

import React, { useState } from "react";
import emailjs from "emailjs-com";
import style from "./page.module.css";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value || "", // Always provide a fallback value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = "service_vjdyzjt";
    const templateId = "template_9usrp1h";
    const publicKey = "ELV1qYMqHs969bB3k";

    const templateParams = {
        to_name: formData.email.split('@')[0], // You can replace this with a dynamic value if needed
        from_name: formData.name,
        message: formData.message,
    };

    console.log(formData);

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatusMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      })
      .catch((err) => {
        console.error("Failed to send message:", err);
        setStatusMessage("Failed to send your message. Please try again.");
      });
  };

  return (
    <div>
      <h1 className="page-title">Contact Me</h1>
      <div className={style["contact-page"]}>
        <form className={style["contact-form"]} onSubmit={handleSubmit}>
          <label className={style["contact-label"]} htmlFor="name">
            Name:
          </label>
          <input
            className={style["contact-text"]}
            type="text"
            id="name"
            name="name"
            value={formData.name} // Controlled input
            onChange={handleChange}
            required
          />
          <label className={style["contact-label"]} htmlFor="email">
            Email:
          </label>
          <input
            className={style["contact-text"]}
            type="email"
            id="email"
            name="email"
            value={formData.email} // Controlled input
            onChange={handleChange}
            required
          />
          <label className={style["contact-label"]} htmlFor="message">
            Message:
          </label>
          <textarea
            className={style["contact-text"]}
            id="message"
            name="message"
            value={formData.message} // Controlled input
            onChange={handleChange}
            required
          ></textarea>
          <input className={style["submit-button"]} type="submit" value="Send" />
        </form>
        {statusMessage && <p>{statusMessage}</p>}
      </div>
    </div>
  );
}
