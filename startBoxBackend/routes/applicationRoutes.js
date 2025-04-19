const express = require('express');
const ApplicationRouter = express.Router();

const {createApplication,getApplicationsByUser,getApplicationsByJob} = require("../controller/applicationController");


ApplicationRouter.post('/', createApplication);

ApplicationRouter.get('/user/:userId', getApplicationsByUser);

ApplicationRouter.get('/job/:jobId', getApplicationsByJob);

module.exports = {ApplicationRouter};
