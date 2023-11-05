const db = require("../db.js");
const helpers = require('../../generator/helpers');

const getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        return res.json(await db.Projects.findByPk(id));
    } catch (error) {
        next(error);
    }
};

const getAll = async (req, res, next) => {
    try {
        const user_id = req.decodedToken.userid;
        return res.json(await db.Projects.findAll( { where: { user_id } }));
    } catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    try {
        let data = req.body;
        data.user_id = req.decodedToken.userid;
        return res.json(await db.Projects.create(data));
    } catch (error) {
        next(error);
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        return res.json(await db.Projects.update(data, { where: { id } }));
    } catch (error) {
        next(error);
    }
}

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        return res.json(await db.Projects.destroy({ where: { id } }));
    } catch (error) {
        next(error);
    }
}

const generateProject = async (req, res, next) => {
    try {
        const id = req.params.id;

        const project = await db.Projects.findByPk(id);

        const projectName = helpers.generateRandomString();
        helpers.generateProject(projectName);

        let dbConfigFileText = helpers.generateDbConfig(project.database_settings.dbName, project.database_settings.dbUser, project.database_settings.dbPassword, project.database_settings.dbServer, project.database_settings.dbPort, project.database_settings.dbDialect);
        let routes = helpers.createRoutes();

        let models = await db.Models.findAll({ where: { project_id: id } });

        models.forEach(model => {
            let f = helpers.createModel(model.name);
            let properties = model.properties;
            properties.forEach(property => {
                f = helpers.addPropertyToModel(f, property.name, property.type);
            });
            helpers.writeModelFileToProject(f, model.name, projectName);

            dbConfigFileText = helpers.addModelToDbConfig(dbConfigFileText, model.name);

            let controller = helpers.createController(model.name);
            helpers.writeControllerFileToProject(controller, model.name, projectName);

            let route = helpers.createRoute(model.name);
            helpers.writeRouteFileToProject(route, model.name, projectName);

            routes = helpers.addRouteToRoutes(routes, model.name);
        });

        helpers.writeDbConfigFileToProject(dbConfigFileText, projectName);
        helpers.writeRoutesFileToProject(routes, projectName);
        const zip_path = await helpers.zipProject(projectName);

        return res.download(zip_path, project.name + ".zip")
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    getById,
    getAll,
    create,
    update,
    remove,
    generateProject
}