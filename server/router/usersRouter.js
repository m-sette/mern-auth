import express from 'express';
import { addUser, getUser } from '../controller/usersController.js';
import {
    registerValidation,
    validate,
    loginValidation,
} from '../middleware/userValidation.js';
const router = express.Router();

router.post('/register', registerValidation, validate, addUser);
router.post('/login', loginValidation, validate, getUser);

export default router;
