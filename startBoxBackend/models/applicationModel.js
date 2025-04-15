
const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['applied', 'reviewing', 'interviewing', 'rejected', 'hired'], default: 'applied' },
  appliedAt: { type: Date, default: Date.now },
  resume: { type: String},
  coverLetter: { type: String}
});

const ApplicationModel = mongoose.model('Application', ApplicationSchema);
module.exports = {ApplicationModel}
