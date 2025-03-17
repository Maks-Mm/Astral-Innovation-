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
    const [errorMessage, setErrorMessage] = useState(""); // State to hold error messages

    // Hardcoded API key for testing purposes
    const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
//const API_KEY = process.env.REACT_APP_OPENAI_API_KEY || "";
   console.log("API Key:", process.env.REACT_APP_OPENAI_API_KEY);

    console.log("API Key:", API_KEY);


//is the issue with the API key?
const sendMessage = async (retries = 3) => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setErrorMessage("");

    try {
        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-3.5-turbo",
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
        if (error.response) {
            if (error.response.status === 429) {
                if (retries > 0) {
                    const waitTime = 5000; // wait 5 seconds before retrying
                    console.log(`Rate limit exceeded. Retrying in ${waitTime / 1000} seconds...`);
                    await new Promise(resolve => setTimeout(resolve, waitTime)); // Wait for 5 seconds
                    return sendMessage(retries - 1); // Retry the request
                } else {
                    setErrorMessage("Rate limit exceeded. Please try again later.");
                }
            } else {
                setErrorMessage("An error occurred. Please try again later.");
            }
            console.error("Error fetching response:", error.response.data);
        } else {
            console.error("Error", error.message);
        }
    }
};




    const toggleChat = () => {
        setIsChatOpen(!isChatOpen); // Toggle chatbot visibility
    };

    return (
        <div className="chatbot-wrapper">
            {!isChatOpen && (
                <div className="suggestion-box" onClick={toggleChat}>
                    💬 Click here to chat with our AI assistant!
                </div>
            )}
            {isChatOpen && (
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
            )}
        </div>
    );
};

export default Chatbot;
