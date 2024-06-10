import TailorModel from '../models/tailor.model.js';

class TailorService {
    static async createTailor(tailorData) {
        try {
            const createTailor = new TailorModel(tailorData);
            return await createTailor.save();
        } catch (err) {
            throw err;
        }
    }

    static async getTailorByEmail(email) {
        try {
            return await TailorModel.findOne({ email });
        } catch (err) {
            console.log(err);
        }
    }

    static async getAllTailors() {
        try {
            return await TailorModel.find();
        } catch (error) {
            throw error;
        }
    }
}

export default TailorService;
