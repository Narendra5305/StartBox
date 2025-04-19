


const {JobModel} = require("../models/jobModel");

const {StartupModel} =  require("../models/startUpModel");

// Create a new job post
const createJob = async (req, res) => {
  try {
    const newJob = new StartupModel(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all job posts
const getAllJobs = async (req, res) => {
  try {
    const jobs = await StartupModel.find()
      .populate('startup', 'name location industry');
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get job by ID
const getJobById = async (req, res) => {
  try {
    const job = await StartupModel.findById(req.params.id)
      .populate('startup', 'name location industry');

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {createJob , getAllJobs , getJobById };
