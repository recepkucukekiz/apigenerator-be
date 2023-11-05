const config = require("./config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.server,
    port: config.db.port,
    dialect: config.db.dialect,
    define: {
        freezeTableName: true,
        timestamps: true
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Projects = require("./models/project.model.js")(sequelize, Sequelize);
db.Models = require("./models/model.model.js")(sequelize, Sequelize);
db.Users = require("./models/user.model.js")(sequelize, Sequelize);

module.exports = db;