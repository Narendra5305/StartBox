
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String  },
  email: { type: String, unique: true },
  password: { type: String  },
  role: { type: String, enum: ['founder', 'investor', 'jobseeker'], default: 'jobseeker' },
  bio: { type: String  },
  skills: [{ type: String  }],
  interests: [{ type: String  }],
  profilePic:{ type: String  },
  createdAt: { type: Date, default: Date.now }
});


const UserModel = mongoose.model('User', UserSchema);

module.exports = {UserModel}
