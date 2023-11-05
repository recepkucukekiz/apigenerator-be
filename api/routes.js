const router = require("express").Router();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const projectRouter = require("./routes/project.route");
router.use("/projects", projectRouter);

const modelRouter = require("./routes/model.route");
router.use("/models", modelRouter);

const authRouter = require("./routes/auth.route");
router.use("/auth", authRouter);

//Swagger Options
const options = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            title: "API Generator",
            version: "0.4.8",
            description:
                "Swagger Documentation for API Generator",
        },
        basePath: "/",
        produces: ["application/json"],
        schemas: ["http", "https"],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
    },
    apis: [
        path.join(__dirname, 'docs', 'project.doc.js'),
        path.join(__dirname, 'docs', 'model.doc.js'),
        path.join(__dirname, 'docs', 'auth.doc.js'),
    ]
};
const swaggerSpec = swaggerJSDoc(options);
router.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;