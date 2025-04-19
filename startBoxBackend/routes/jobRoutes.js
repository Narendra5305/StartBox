const express = require('express');
const JobRouter = express.Router();

const {createJob , getAllJobs , getJobById } = require("../controller/jobController")

JobRouter.post('/',createJob);

JobRouter.get('/', getAllJobs);

JobRouter.get('/:id', getJobById);

module.exports = {JobRouter};
