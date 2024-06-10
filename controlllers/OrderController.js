const OrderService = require('../services/order.service');

exports.createOrder = async (req, res, next) => {
    try {
        const orderData = req.body;
        const response = await OrderService.createOrder(orderData);
        res.status(201).json({ status: true, success: 'Order created successfully', data: response });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

exports.getAllOrders = async (req, res, next) => {
    try {
        const orders = await OrderService.getAllOrders();
        res.status(200).json({ status: true, data: orders });
    } catch (err) {
        console.log(err);
        next(err);
    }
}
