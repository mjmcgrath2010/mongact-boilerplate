const mongoose = require('mongoose');
const { Schema } = mongoose;

const ChristinaSchema = new mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: Schema.Types.String,
  },
  title: {
    type: Schema.Types.String,
  },
  neopet: {
    type: Schema.Types.String,
  },
});

module.exports = mongoose.model('christina', ChristinaSchema);
