const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const db = require('../db');

const login = async (username, password) => {
    const user = await db.Users.findOne({ where: { username } });
    if (!user) throw new Error("Invalid username or password");

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new Error("Invalid username or password");

    const token = jwt.sign(
        { userid: user.id, username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h", }
    );

    const refreshToken = crypto.randomBytes(64).toString('hex');
    user.refreshToken = refreshToken;
    await user.save();

    return { message: "Logged in successfully", token, refreshToken };
}

const register = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { username, password: hashedPassword };

    const user = await db.Users.create(newUser);
    if (!user) throw new Error("Failed to register user");

    const token = jwt.sign(
        { userid: user.id, username: user.username, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h", }
    );

    const refreshToken = crypto.randomBytes(64).toString('hex');
    user.refreshToken = refreshToken;
    await user.save();

    return { message: "Successfully registered", token, refreshToken };
}

const refreshToken = async (refreshToken) => {
    const user = await db.Users.findOne({ where: { refreshToken } });
    if (!user) throw new Error("Invalid refresh token");

    const newToken = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    return { message: "New access token generated", token: newToken };
}

const logout = async (refreshToken) => {
    const user = await db.Users.findOne({ where: { refreshToken } });
    if (!user) throw new Error("Invalid refresh token");

    user.refreshToken = null;
    await user.save();
    return { message: "User logged out successfully" };
}

module.exports = {
    login,
    register,
    refreshToken,
    logout
}