module.exports = (role) => {
    return function (req, res, next) {
        if (req.decodedToken.role !== role) {
            return res.status(403).json({ status: "FAILED", result: "Failed", showMessage: true, message: "unauthorization" })
        } else {
            next();
        }
    }
};