import User from '../model/usersModel.js';

export const addUser = async (req, res, next) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email })
        if ( user ) {
            throw new Error("Invalid Request")
        }

        console.log(user)

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
    try {
        res.json({test: "working"})
    } catch (error) {
        next(error)
    }
}
