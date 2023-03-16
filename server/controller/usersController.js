import User from '../model/usersModel.js';
import jwt from 'jsonwebtoken';

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

export const userLogin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        const pass = await user.validatePassword(password);
        if (!pass) throw new Error('Invalid password');

        /**
         * create a token to send in the headers
         */
        const token = jwt.sign({ email: user.email }, 'secrete');

        res.status(202).header('token', token).json({ success: true, email });
    } catch (error) {
        next(error);
    }
};

export const getUser = async (req, res, next) => {
    // try {

    // } catch (error) {

    // }

    res.json({ success: true, message: 'Welcome' });
};

/**
 * decoding the jwt from headers to make sure user is allowed to visit resources.
 * best to use in the middleware
 */
// const decode = jwt.verify(token, 'secret')
// const user = await User.findById(decode.id);
// next();
