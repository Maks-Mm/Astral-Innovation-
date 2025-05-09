"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Chatbot.css";
import { RiSendPlane2Fill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");
        setErrorMessage("");

        try {
            const response = await axios.post("http://localhost:3001/chatbot", {
                message: input,
            });

            const botMessage = {
                role: "assistant",
                content: response.data.response,
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            setErrorMessage("An error occurred. Please try again later.");
            console.error("Error fetching response:", error);
        }
    };

    return (
        <div className="chatbot-wrapper">
            {!isChatOpen && (
                <div className="suggestion-box" onClick={() => setIsChatOpen(true)} data-aos="fade-in" style={{ cursor: "pointer", width: "100px" }}>
                    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHdodjFsdWZ5bnUwN21zdWd4eHp6YzZ0ODdrY291OGg1ZXVjNWZ2ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S60CrN9iMxFlyp7uM8/giphy.gif" alt="Chatbot Logo" className="chatbot-image" />

                </div>
            )}

            {isChatOpen && (
                <div className="chatbot-container" data-aos="zoom-in">
                    <div className="chatbot-header">
                        <h2 className="chatbot-title">Chatbot</h2>
                        <button className="close-button" onClick={() => setIsChatOpen(false)}>
                            <GrFormClose />
                        </button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chatbot-message ${msg.role}`}>
                                <p>
                                    <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
                                </p>
                            </div>
                        ))}
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className="chatbot-input-container">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="chatbot-input"
                        />
                        <button onClick={sendMessage} className="chatbot-button">
                            <RiSendPlane2Fill />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
