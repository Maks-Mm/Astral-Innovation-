import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3002; 


app.use(cors());
app.use(express.json()); 


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);


app.post('/api/chat', async (req, res) => {
    const { message } = req.body; 

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
                maxOutputTokens: 10,
                temperature: 0.1,
            }
        });

        const responseText = await result.response.text();
        res.json({ response: responseText });
    } catch (error) {
        console.error("Error fetching from AI:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
