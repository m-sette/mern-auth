import express from 'express';
import { addUser, getUser, userLogin } from '../controller/usersController.js';
import {
    registerValidation,
    validate,
    loginValidation,
} from '../middleware/userValidation.js';
const router = express.Router();

router.post('/register', registerValidation, validate, addUser);
router.post('/login', loginValidation, validate, userLogin);

router.get('/:email', getUser);

export default router;
