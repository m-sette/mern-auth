import { body, validationResult } from 'express-validator';

const userValidation = () => {
    return [
        body('firstname').exists(),
        body('lastname').exists(),
        body('email').isEmail(),
        body('password').exists(),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    const errorMessages = [];
    errors.array().map((err) => errorMessages.push({ [err.param]: err.msg }));
    return res.status(400).json({
        errors: errorMessages,
    });
};

export { userValidation, validate };
