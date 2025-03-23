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

    const sendMessage = async (retries = 3) => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");
        setErrorMessage("");

        try {
            // Call the backend chatbot endpoint
            const response = await axios.post("http://localhost:3001/chatbot", {
                message: input, // Send the user message to the backend
            });

            // Extracting the response from the backend
            const botMessage = {
                role: "assistant",
                content: response.data.response, // Get the AI's response from the backend
            };
            setMessages([...newMessages, botMessage]);
        } catch (error) {
            if (error.response) {
                setErrorMessage("An error occurred. Please try again later.");
                console.error("Error fetching response:", error.response.data);
            } else {
                console.error("Error", error.message);
            }
        }
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className="chatbot-background">
            {!isChatOpen && (
                <div className="suggestion-box" onClick={toggleChat} data-aos="zoom-out">
                    💬 Click here to chat with our AI assistant!
                </div>
            )}
            {isChatOpen && (
                <div className="chatbot-container-wrapper" data-aos="zoom-out">
                    <div className="chatbot-container">
                        <div className="chatbot-header">
                            <h2 className="chatbot-title">Chatbot</h2>
                            <div className="close-button" onClick={toggleChat}>
                                <GrFormClose />
                            </div>
                        </div>
                        <div className="chatbot-messages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`chatbot-message ${msg.role}`}>
                                    <p className="text-white">
                                        <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {errorMessage && (
                            <div style={{ color: "red", margin: "10px 0" }}>
                                {errorMessage}
                            </div>
                        )}
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                className="chatbot-input"
                            />
                            <button onClick={sendMessage} className="chatbot-button"><RiSendPlane2Fill /></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
