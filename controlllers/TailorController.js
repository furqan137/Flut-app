import TailorService from '../services/tailor.service.js';

export const createTailor = async (req, res, next) => {
    try {
        const tailorData = req.body;
        const response = await TailorService.createTailor(tailorData);
        res.status(201).json({ status: true, success: 'Tailor created successfully', data: response });
    } catch (err) {
        console.log(err);
        next(err);
    }
}

export const getAllTailors = async (req, res, next) => {
    try {
        const tailors = await TailorService.getAllTailors();
        res.status(200).json({ status: true, data: tailors });
    } catch (err) {
        console.log(err);
        next(err);
    }
}
