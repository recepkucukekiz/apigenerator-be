const JSZip = require('jszip');
const fs = require('fs');
const path = require('path');

const baseFilePaths = require('../generator/paths');
const fsHelpers = require('./fs-helpers');
const dataTypeMapper = require('./data-type-mapper');

function zipProject(projectName) {
    const zip = new JSZip();
    const projectPath = path.join(__dirname, "../", projectName);

    const files = fs.readdirSync(projectPath);
    files.forEach((file) => {
        const filePath = path.join(projectPath, file);
        if (fs.lstatSync(filePath).isDirectory()) {
            const subFiles = fs.readdirSync(filePath);
            subFiles.forEach((subFile) => {
                const subFilePath = path.join(filePath, subFile);
                zip.file(subFilePath.replace(projectPath + "/", ""), fs.readFileSync(subFilePath));
            });
        } else {
            zip.file(filePath.replace(projectPath + "/", ""), fs.readFileSync(filePath));
        }
    });

    const zipFilePath = path.join(__dirname, "../", projectName + ".zip");
    return new Promise((resolve, reject) => {
        zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
            .pipe(fs.createWriteStream(zipFilePath))
            .on('finish', function () {
                console.log("Project created successfully! Zip file is located at: " + zipFilePath);
                resolve(zipFilePath);
            })
            .on('error', function (error) {
                console.log("Error creating zip file: " + error);
                reject(error);
            });
    });
}

function generateRandomString() {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < 16; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
}

const modelNameFormatter = (modelName) => {
    const tableName = modelName.replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '').toUpperCase();
    return tableName;
}

const generateProject = (projectName) => {
    try {
        fsHelpers.createDirectory(projectName);

        const modelsFolderPath = path.join(projectName, "models");
        fsHelpers.createDirectory(modelsFolderPath);

        const controllersFolderPath = path.join(projectName, "controllers");
        fsHelpers.createDirectory(controllersFolderPath);

        const routesFolderPath = path.join(projectName, "routes");
        fsHelpers.createDirectory(routesFolderPath);

        // fsHelpers.writeFile(path.join(projectName, "routes.js"), fsHelpers.readFile(baseFilePaths.BASE_ROUTES_FILE));

        fsHelpers.writeFile(path.join(projectName, "app.js"), fsHelpers.readFile(baseFilePaths.BASE_APP_FILE));

        fsHelpers.writeFile(path.join(projectName, "db.js"), fsHelpers.readFile(baseFilePaths.BASE_DB_FILE));

        fsHelpers.writeFile(path.join(projectName, "package.json"), fsHelpers.readFile(baseFilePaths.BASE_PACKAGE_FILE));
    } catch (error) {
        console.log(error);
    }
}

const createModel = (modelName) => {
    try {
        const tableName = modelNameFormatter(modelName);
        const file = fsHelpers.readFile(baseFilePaths.BASE_MODEL_FILE);

        return file.replace(/#{ModelName}#/g, tableName);
    } catch (error) {
        console.log(error);
    }
}

const addPropertyToModel = (model, propertyName, propertyType) => {
    try {
        const property = `        ${modelNameFormatter(propertyName)}: { type: ${dataTypeMapper[propertyType]} },`;
        const propertyText = "\n"+ property + "//#{ModelPropertiesSection}#";

        model = model.replace("//", "");
        return model.replace(/#{ModelPropertiesSection}#/g, propertyText);
    } catch (error) {
        console.log(error);
    }
}

const writeModelFileToProject = (model, modelName, projectName) => {
    try {
        const modelFilePath = path.join(projectName, "models", modelNameFormatter(modelName) + ".js");
        fsHelpers.writeFile(modelFilePath, model);
    } catch (error) {
        console.log(error);
    }
}

const generateDbConfig = (dbName, dbUser, dbPassword, dbServer, dbPort, dbDialect) => {
    try {
        const dbConfig = fsHelpers.readFile(baseFilePaths.BASE_DB_FILE);

        return dbConfig
            .replace(/#{DbName}#/g, dbName)
            .replace(/#{DbUser}#/g, dbUser)
            .replace(/#{DbPassword}#/g, dbPassword)
            .replace(/#{DbServer}#/g, dbServer)
            .replace(/#{DbPort}#/g, dbPort)
            .replace(/#{DbDialect}#/g, dbDialect);
    } catch (error) {
        console.log(error);
    }
}

const writeDbConfigFileToProject = (dbConfig, projectName) => {
    try {
        const dbConfigFilePath = path.join(projectName, "db.js");
        fsHelpers.writeFile(dbConfigFilePath, dbConfig);
    } catch (error) {
        console.log(error);
    }
}

const addModelToDbConfig = (dbConfig, modelName) => {
    try {
        const modelList = `db.${modelNameFormatter(modelName)} = require('./models/${modelNameFormatter(modelName)}')(sequelize, Sequelize);`;
        const modelListText = "\n"+ modelList + "//#{ModelList}#";

        dbConfig = dbConfig.replace("//", "");
        return dbConfig.replace(/#{ModelList}#/g, modelListText);
    } catch (error) {
        console.log(error);
    }
}

const createController = (modelName) => {
    try {
        const tableName = `db.${modelNameFormatter(modelName)}`;
        const file = fsHelpers.readFile(baseFilePaths.BASE_CONTROLLER_FILE);

        return file.replace(/#{ModelName}#/g, tableName);
    } catch (error) {
        console.log(error);
    }
}

const writeControllerFileToProject = (controller, modelName, projectName) => {
    try {
        const controllerFilePath = path.join(projectName, "controllers", modelNameFormatter(modelName) + ".js");
        fsHelpers.writeFile(controllerFilePath, controller);
    } catch (error) {
        console.log(error);
    }
}

const createRoute = (modelName) => {
    try {
        const tableName = `${modelNameFormatter(modelName)}`;
        const file = fsHelpers.readFile(baseFilePaths.BASE_ROUTE_FILE);

        return file.replace(/#{ModelName}#/g, tableName);
    } catch (error) {
        console.log(error);
    }
}

const writeRouteFileToProject = (route, modelName, projectName) => {
    try {
        const routeFilePath = path.join(projectName, "routes", modelNameFormatter(modelName) + ".js");
        fsHelpers.writeFile(routeFilePath, route);
    } catch (error) {
        console.log(error);
    }
}

const createRoutes = () => {
    try {
        return fsHelpers.readFile(baseFilePaths.BASE_ROUTES_FILE);
    } catch (error) {
        console.log(error);
    }
}

const addRouteToRoutes = (route, modelName) => {
    try {
        const routeList = `app.use('/${modelNameFormatter(modelName)}', require('./routes/${modelNameFormatter(modelName)}'));`;
        const routeListText = "\n"+ routeList + "//#{RoutesSection}#";

        route = route.replace("//", "");
        return route.replace(/#{RoutesSection}#/g, routeListText);
    } catch (error) {
        console.log(error);
    }
}

const writeRoutesFileToProject = (route, projectName) => {
    try {
        const routeFilePath = path.join(projectName, "routes.js");
        fsHelpers.writeFile(routeFilePath, route);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    zipProject,
    generateRandomString,
    generateProject,
    createModel,
    addPropertyToModel,
    writeModelFileToProject,
    generateDbConfig,
    writeDbConfigFileToProject,
    addModelToDbConfig,
    createController,
    writeControllerFileToProject,
    createRoute,
    writeRouteFileToProject,
    createRoutes,
    addRouteToRoutes,
    writeRoutesFileToProject
}