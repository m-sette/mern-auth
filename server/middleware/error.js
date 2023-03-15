const error = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        success: false,
        message: error.message,
        cause: error.cause,
    });
};

export default error;
