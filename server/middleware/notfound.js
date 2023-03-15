const notFound = (req, res, next) => {
    const error = new Error('Not found', { cause: "The page doesn't exit" });
    error.status = 404;
    next(error);
};

export default notFound;
