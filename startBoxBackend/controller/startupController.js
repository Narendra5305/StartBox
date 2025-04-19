

const {StartupModel} = require("../models/startUpModel")


const createStartup = async (req, res) => {
    try {
      const newStartup = new StartupModel(req.body);
      const savedStartup = await newStartup.save();
      res.status(201).json(savedStartup);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
};


const getAllStartups = async (req, res) => {
    try {
      const startups = await StartupModel.find()
        .populate('founder', 'name email')
        .populate('team', 'name email')
        .populate('fundingRounds.investor', 'name email');
      res.status(200).json(startups);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  

const getStartupById = async (req, res) => {
    try {
      const startup = await StartupModel.findById(req.params.id)
        .populate('founder', 'name email')
        .populate('team', 'name email')
        .populate('fundingRounds.investor', 'name email');
  
      if (!startup) {
        return res.status(404).json({ message: 'Startup not found' });
      }
  
      res.status(200).json(startup);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};
  



module.exports ={createStartup , getAllStartups , getStartupById}