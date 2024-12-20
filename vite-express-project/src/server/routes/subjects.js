import express from "express";
import { getById, update, getAll, add, remove } from "../models/subject.js";

const route = express.Router();


route.get('/', async (req, res) => {
    res.json({
        data: await getAll()
    });
});

route.get('/:id', async (req, res) => {
    const id = req.params.id;
    const subject = await getById(id);

    if (subject) {
        return res.json({ data: subject });
    }
    else {
        return res.status(404).json({ error: 'Subject not found!' });
    }
});

route.post('/', async (req, res) => {
    const subject = req.body;
    const newSubject = await add(subject);
    res.json({ data: newSubject });
});

route.put('/:id', async (req, res) => {
    const id = req.params.id;
    const subject = req.body;
    
    try{
        let updatedSubject = await update(subject) ;
        return res.json({ data: updatedSubject });
    }
    catch(error){
        return res.status(404).json({ error: 'Subject not found!' });
    }
});

route.delete('/:id', async (req, res) => {
    const id = req.params.id;
    
    try{
        await remove(id);
        return res.send('Ok');
    }
    catch(error){
        return res.status(404).json({ error: 'Subject not found!' });
    }
});

export default route;