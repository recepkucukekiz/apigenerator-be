module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "user"
        },
        refreshToken: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });

    return User;
}