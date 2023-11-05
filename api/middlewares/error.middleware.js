module.exports = (err, req, res, next) => {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Server Error';

    res.status(errStatus).json({
        message: errMsg,
        data: null,
        stack: process.env.NODE_ENV === 'dev' ? err.stack : undefined
    })
}