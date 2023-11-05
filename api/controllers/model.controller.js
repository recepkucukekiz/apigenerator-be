const db = require("../db.js");

const getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        return res.json(await db.Models.findByPk(id));
    } catch (error) {
        next(error);
    }
}

const getAllByProjectId = async (req, res, next) => {
    try {
        const project_id = req.params.projectId;
        return res.json(await db.Models.findAll({ where: { project_id } }));
    } catch (error) {
        next(error);
    }
}

const create = async (req, res, next) => {
    try {
        let data = req.body;
        data.user_id = req.decodedToken.userid;
        return res.json(await db.Models.create(data));
    } catch (error) {
        next(error);
    }
}

// const update = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const data = req.body;
//         return res.json(await db.Models.update(data, { where: { id } }));
//     } catch (error) {
//         next(error);
//     }
// }

const remove = async (req, res, next) => {
    try {
        const id = req.params.id;
        return res.json(await db.Models.destroy({ where: { id } }));
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getById,
    getAllByProjectId,
    create,
    // update,
    remove
}