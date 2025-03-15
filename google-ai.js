import dotenv from 'dotenv';

dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("GOOGLE_API_KEY", process.env.GOOGLE_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

// Set maxTokens to limit the length of the response
const maxTokens = 50; // Adjust this value as needed

const result = await model.generateContent(prompt, { maxTokens });
console.log(result.response.text());
