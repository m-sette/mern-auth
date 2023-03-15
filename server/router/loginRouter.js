import express from "express";
import { loginController } from '../controller/loginController.js'
import { emailValidation, validate } from '../middleware/emailValidation.js'
const router = express.Router();


router.post('/',  emailValidation(), validade loginController);

export default router
