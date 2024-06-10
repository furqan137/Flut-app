import express from 'express';
import Tailor from '../models/TailorModels.js';

const router = express.Router();

// Create a new tailor
router.post('/', async (req, res) => {
    try {
        const tailor = new Tailor(req.body);
        await tailor.save();
        res.status(201).send(tailor);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all tailors
router.get('/', async (req, res) => {
    try {
        const tailors = await Tailor.find();
        res.status(200).send(tailors);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
