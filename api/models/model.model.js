module.exports = (sequelize, Sequelize) => {
    const Models = sequelize.define('Models', {
        user_id: {
            type: Sequelize.INTEGER
        },
        project_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Projects',
                key: 'id'
            }
        },
        name: {
            type: Sequelize.STRING
        },
        table_name: {
            type: Sequelize.STRING
        },
        properties: {
            type: Sequelize.JSONB
        }
    });

    return Models;
}