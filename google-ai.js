import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3002; // Change to 3002


app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Chatbot endpoint
app.post('/api/chat', async (req, res) => {
    const { message } = req.body; // Expecting a message in the request body

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const result = await model.generateContent({
            contents: [
                {
                    role: 'user',
                    parts: [{ text: message }]
                }
            ],
            generationConfig: {
                maxOutputTokens: 50,
                temperature: 0.1,
            }
        });

        const responseText = await result.response.text();
        res.json({ response: responseText }); // Send the response back to the client
    } catch (error) {
        console.error("Error fetching from AI:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
