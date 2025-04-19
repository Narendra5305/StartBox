

const {ApplicationModel} = require("../models/applicationModel")
const {JobModel} = require("../models/jobModel")
const {UserModel} = require("../models/userModel")



// Create a new application
const createApplication = async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    const savedApp = await newApplication.save();
    res.status(201).json(savedApp);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



// Get all applications by a user
const getApplicationsByUser = async (req, res) => {
  try {
    const apps = await Application.find({ user: req.params.userId }).populate('job').populate('user', 'name email');
    res.status(200).json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// Get all applications for a specific job
const getApplicationsByJob = async (req, res) => {
  try {
    const apps = await Application.find({ job: req.params.jobId }).populate('user', 'name email profilePic').populate('job', 'title startup');
    res.status(200).json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  createApplication,
  getApplicationsByUser,
  getApplicationsByJob,
};
