import OrderModel from '../models/order.model.js';

class OrderService {
    static async createOrder(orderData) {
        try {
            const createOrder = new OrderModel(orderData);
            return await createOrder.save();
        } catch (err) {
            throw err;
        }
    }

    static async getAllOrders() {
        try {
            return await OrderModel.find();
        } catch (error) {
            throw error;
        }
    }

    static async getOrderByUser(userId) {
        try {
            return await OrderModel.find({ userId });
        } catch (error) {
            throw error;
        }
    }

    static async getOrderById(orderId) {
        try {
            return await OrderModel.findById(orderId);
        } catch (error) {
            throw error;
        }
    }
}

export default OrderService;
