import User from "../model/usersModel.js";

export const loginController = async (req, res, next) => {
    const { email, password } = req.body;
   try {
       const user = await User.findOne({ email })
       if (!user) throw new Error('User not found');

       const pass = await user.validatePassword(password);
       if (!pass) throw new Error("Invalid password")

       res.json({success: true});
   } catch (error) {
       next(error)
   }
    res.json({msg: "it works"})
}