import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_adq9ksb",
                "template_1fqd672",
                form.current,
                "wx3rg8EOoVS23uQxz"
            )
            .then(
                (result) => {
                    console.log("Email sent successfully");
                },
                (error) => {
                    console.log("Error in sending an email");
                }
            );
        e.target.reset();
    };

    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    Let's Chat! Have a question, idea, or just want to say hello? I'd love to hear from you! Feel free to reach out using the contact form below, or if you prefer a more immediate conversation, don't hesitate to send me a message via email or connect with me on social media. I'm here and eager to chat with you about anything you'd like!
                </p>
            </div>
            <form
                ref={form}
                className="contact--form--container"
                onSubmit={sendEmail}
            >
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="first-name"
                            id="first-name"
                            required
                        ></input>
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="last-name"
                            id="last-name"
                            required
                        ></input>
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            required
                        ></input>
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input
                            type="number"
                            className="contact--input text-md"
                            name="phone-number"
                            id="phone-number"
                            required
                        ></input>
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select
                        id="choose-topic"
                        className="contact--input text-md"
                        name="choose-topic"
                        required
                    >
                        <option>Select One...</option>
                        <option>Job Opportunity</option>
                        <option>Networking</option>
                        <option>Tech Talk</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input text-md"
                        id="message"
                        rows="8"
                        name="message"
                        placeholder="Type your message..."
                        required
                    ></textarea>
                </label>
                <div>
                    <button className="btn btn-primary contact--form--btn">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}
