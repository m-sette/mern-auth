import User from '../model/usersModel.js';

export const addUser = async (req, res, next) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            throw new Error('Invalid Request');
        }

        //TODO handle pass hassing in the controller

        console.log(user);

        await User.create(req.body);
        res.status(201).json({
            success: true,
            message: 'New User was create',
        });
    } catch (error) {
        next(error);
    }
};

export const getUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        const pass = await user.validatePassword(password);
        if (!pass) throw new Error('Invalid password');

        res.json({ success: true });
    } catch (error) {
        next(error);
    }
};
