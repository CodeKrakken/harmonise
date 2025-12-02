import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import { Venue } from './schemata'
import { randomMessage } from "./logic/randomMessage";

const app = express();
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/harmonise", {})
    .then(r => {});

app.get('/api/venues', async (req, res, next) => {
    try {
        const venues = Venue.find();
        res.json(venues);
    } catch (e) { next(e); }
});

app.post('/api/venues', async (req, res, next) => {
    try {
        const todo = await Venue.create(req.body);
        res.status(201).json(todo);
    } catch (err) {
        next(err);
    }
});

app.use((err: any, req: any, res: any, next: any) => {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
});

app.listen(5000, () => console.log('Server listening on port 5000 ' + randomMessage()));