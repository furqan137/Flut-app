import DesignService from '../services/design.service.js';

export const createDesign = async (req, res, next) => {
    try {
        const designData = req.body;
        const response = await DesignService.createDesign(designData);
        res.status(201).json({ status: true, success: 'Design created successfully', data: response });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const getAllDesigns = async (req, res, next) => {
    try {
        const designs = await DesignService.getAllDesigns();
        res.status(200).json({ status: true, data: designs });
    } catch (err) {
        console.log(err);
        next(err);
    }
}
