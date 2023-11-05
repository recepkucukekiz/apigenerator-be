const service = require('./auth.service');

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const response = await service.login(username, password);
        res.status(200).json(response);
    } catch (e) {
        next(e);
    }
};

const register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const response = await service.register(username, password);
        res.status(201).json(response);
    } catch (e) {
        next(e);
    }
};

const refreshToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        const response = await service.refreshToken(refreshToken);
        res.status(200).json(response);
    } catch (e) {
        next(e);
    }
}

const logout = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        const response = await service.logout(refreshToken);
        res.status(200).json(response);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    login,
    register,
    refreshToken,
    logout
};