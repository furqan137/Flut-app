import express from 'express';
import Design from '../models/DesignModels.js';

const router = express.Router();

// Create a new design
router.post('/', async (req, res) => {
    try {
        const design = new Design(req.body);
        await design.save();
        res.status(201).send(design);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all designs
router.get('/', async (req, res) => {
    try {
        const designs = await Design.find().populate('tailorId');
        res.status(200).send(designs);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
