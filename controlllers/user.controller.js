import UserServices from '../services/user.service.js';

export const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const duplicate = await UserServices.getUserByEmail(email);
        if (duplicate) {
            throw new Error(`User with email ${email} already exists`);
        }
        await UserServices.registerUser(email, password);
        res.json({ status: true, success: 'User registered successfully' });
    } catch (err) {
        console.log("Error:", err.message);
        next(err);
    }
}

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Please provide both email and password');
        }
        const user = await UserServices.checkUser(email);
        if (!user) {
            throw new Error('User does not exist');
        }
        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            throw new Error('Incorrect email or password');
        }
        const tokenData = { _id: user._id, email: user.email };
        const token = await UserServices.generateAccessToken(tokenData, "your_secret_key", "1h");
        res.status(200).json({ status: true, success: "User authenticated successfully", token: token });
    } catch (error) {
        console.log("Error:", error.message);
        next(error);
    }
}
