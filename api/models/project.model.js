module.exports = (sequelize, Sequelize) => {
    const Projects = sequelize.define('Projects', {
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            },
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        database_settings: {
            type: Sequelize.JSONB
        }
    });

    return Projects;
}