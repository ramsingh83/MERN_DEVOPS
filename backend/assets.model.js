const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define collection and schema for assets
const Assets = new Schema({
  createrName: {
    type: String
  },
  assetName: {
    type: String
  },
  assetNumber: {
    type: Number
  }
}, {
  collection: 'assets'
});

module.exports = mongoose.model('Assets', Assets);
