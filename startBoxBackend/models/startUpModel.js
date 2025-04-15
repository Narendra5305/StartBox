
const mongoose = require('mongoose');

const StartupSchema = new mongoose.Schema({
  name: { type: String  },
  description:{ type: String  },
  founder: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  website: { type: String  },
  location:{ type: String  },
  industry: [{type: String}],
  logo: { type: String  },
  team: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  fundingRounds: [{
    amount:{ type: Number  },
    investor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date:{ type:Date},
  }],
  createdAt: { type: Date, default: Date.now }
});

const StartupModel = mongoose.model('Startup', StartupSchema);

module.exports ={StartupModel} ;
