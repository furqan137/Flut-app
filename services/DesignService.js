import DesignModel from '../models/design.model.js';

class DesignService {
    static async createDesign(designData) {
        try {
            const createDesign = new DesignModel(designData);
            return await createDesign.save();
        } catch (err) {
            throw err;
        }
    }

    static async getAllDesigns() {
        try {
            return await DesignModel.find();
        } catch (error) {
            throw error;
        }
    }

    static async getDesignById(designId) {
        try {
            return await DesignModel.findById(designId);
        } catch (error) {
            throw error;
        }
    }

    static async getDesignsByTailor(tailorId) {
        try {
            return await DesignModel.find({ tailorId });
        } catch (error) {
            throw error;
        }
    }
}

export default DesignService;
