import express from 'express';
import User from '../models/UserModels.js';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// User login (basic implementation)
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
