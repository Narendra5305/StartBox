const mongoose = require('mongoose');

require('dotenv').config();


const toConnectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
};

module.exports = {toConnectDb};
