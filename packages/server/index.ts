import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send(process.env.OPENAI_API_KEY ? `API Key is set to: ${process.env.OPENAI_API_KEY}` : "test");
});

app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from backend server!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});