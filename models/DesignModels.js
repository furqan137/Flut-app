import mongoose from 'mongoose';

const { Schema } = mongoose;

const designSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String, // Assuming you'll store image URLs
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tailorId: {
        type: Schema.Types.ObjectId,
        ref: 'Tailor',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Design = mongoose.model('Design', designSchema);

export default Design;
