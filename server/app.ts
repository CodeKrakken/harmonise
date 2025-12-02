import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import { Venue } from './schemata'

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