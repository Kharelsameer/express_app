import express from 'express';
import { askQuestion } from '../services/chatService.js';

const route = express.Router();

route.post('/', async (req, res) =>{
    const question = req.body;
    const answer = await askQuestion(question);
    res.json({ data: answer});
})



export default route;

