import express from 'express';
import Order from '../models/OrderModels.js';

const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('designId');
        res.status(200).send(orders);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
