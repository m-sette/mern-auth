import express from 'express';
import { addUser, getUser, userLogin } from '../controller/usersController.js';
import {
    registerValidation,
    validate,
    loginValidation,
    tokenValidation,
} from '../middleware/userValidation.js';
const router = express.Router();

router.post('/register', registerValidation, validate, addUser);
router.post('/login', loginValidation, validate, userLogin);

router.get('/', tokenValidation, validate, getUser);

export default router;
