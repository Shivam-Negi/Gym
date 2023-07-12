const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
  gymName: {
    type: String,
    required: true,
  },
  gymId: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
  plans : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'Plan'
    }
  ],
  members : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : 'User'
    }
  ],
  currentlyCheckedIn : {
    type : Number,
    default : 0
  },
  liveGraph : {
    type : [Number],
    default: () => Array(24).fill(0)
  }
});

module.exports = mongoose.model('Gym', gymSchema);
