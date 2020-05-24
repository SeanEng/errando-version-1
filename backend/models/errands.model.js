const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const errandsSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Errands = mongoose.model('Errands', errandsSchema);

module.exports = Errands;