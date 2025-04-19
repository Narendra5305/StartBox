const express = require('express');
const StartUpRouter = express.Router();

const {createStartup , getAllStartups , getStartupById} = require("../controller/startupController")


StartUpRouter.post('/', createStartup);

StartUpRouter.get('/', getAllStartups);

StartUpRouter.get('/:id', getStartupById);

module.exports = {StartUpRouter};
