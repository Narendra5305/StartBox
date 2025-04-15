
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {type:String},
  description: {type:String},
  startup: { type: mongoose.Schema.Types.ObjectId, ref: 'Startup' },
  location: {type:String},
  type: { type: String, enum: ['full-time', 'part-time', 'internship', 'contract'] },
  salaryRange: {
    min: {type:Number},
    max: {type:Number}
  },
  postedAt: { type: Date, default: Date.now }
});

const JobModel= mongoose.model('Job', JobSchema);

module.exports ={JobModel}
