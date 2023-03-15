import User from '../model/usersModel.js';

export const addUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        console.log(user);
        res.status(201).json({
            success: true,
            message: 'New User was create',
        });
    } catch (error) {
        next(error);
    }
};
