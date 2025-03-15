"use client"
import React, { useState } from "react";
import axios from "axios";
import './Chatbot.css'; // Import the updated CSS file
import { RiSendPlane2Fill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isChatOpen, setIsChatOpen] = useState(false); // State to control chatbot visibility

    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
    console.log("API Key:", API_KEY); // This should log your API key

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");

        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo", // or "gpt-4"
                    messages: newMessages,
                },
                {
                    headers: {
                        "Authorization": `Bearer ${API_KEY}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const botMessage = response.data.choices[0].message;
            setMessages([...newMessages, botMessage]);
        } catch (error) {
            console.error("Error fetching response:", error);
        }
    };

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen); // Toggle chatbot visibility
    };

    const handleFingerprintClick = () => {
        // Implement fingerprint functionality or any other action here
        console.log("Fingerprint icon clicked");
    };

    return (
        <div className="chatbot-wrapper">
            {!isChatOpen && (
                <div className="suggestion-box" onClick={toggleChat}>
                    💬 Click here to chat with our AI assistant!
                </div>
            )}
            {isChatOpen && (
                //<button className="close-button" onClick={toggleChat}>×</button> {/* Close button */}
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
                                <p>
                                    <strong>{msg.role === "user" ? "You" : "ChatGPT"}:</strong> {msg.content}
                                </p>
                            </div>
                        ))}
                    </div>
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
            )}
        </div>
    );
};

export default Chatbot;
