import { body, validationResult } from 'express-validator';

const registerValidation = [
    body('firstname').notEmpty(),
    body('lastname').notEmpty(),
    body('email').isEmail(),
    body('password')
        .isLength({ min: 3 })
        .withMessage('must be at least 3 chars long'),
];

const loginValidation = [
    body('email').isEmail(),
    body('password').isLength({ min: 3 }),
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('User request malformed', {
            cause: errors.array(),
        });
        error.status = 400;
        next(error);
    }
    next();
};

export { registerValidation, validate, loginValidation };
